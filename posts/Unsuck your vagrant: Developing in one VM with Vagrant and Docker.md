
tl;dr Why?

1. Developing with Vagrant is awesome - one VB per project/component
2. Developing with Vagrant sucks - Chef/Puppet/Ansible is slow, VMs are huge, duplicated software/distros everywhere
3. Docker brings the benefits of separate VM boxes within a single VM
4. CoreOS has docker baked in, and will be perfect when production ready
5. Developers rejoice! Coding and deployment will be a synch.

Like me, you might (or might not) love developing in Vagrant. Using VMs for a project's 
stack is incredible:  tools like Ansible mean your VM will always mirror the 
production environment.

If you're a contractor or have a lot of projects, though, chances are you have 
tens of Vagrant boxes sitting in your dev folder, slowly soaking up gigabytes 
of disk space. This is where vagrant sucks... especially with small SSDs.

Enter: [Docker](https://www.docker.io/). An open source tool for managing
containers from one machine. We're going to use containers as "mini vagrants"
for all of our projects - all from one VM. I'm going to assume you're on Mac 
here - I don't know windows.

Let's get proper with docker!

## Step 1: Setting up CoreOS ##

We're going to install Docker using CoreOS and Vagrant, instead of Docker's
recommended Ubuntu vagrant file. Screw recommendations (with measure).

*Why CoreOS?*

CoreOS is an ambitious linux distro aimed at easy, scalable server
deployments. **It's super lightweight, and it comes with Docker pre-installed.**
It's aim is to make serving Docker-based apps a synch. This is why it's our
OS of choice - its skinny filesize and easy installation are also bonuses!
Plus, I really wanted to test it.

<div class='callout'>
<p>Note: CoreOS has <a href="https://github.com/Netflix/SimianArmy">Chaos Monkey</a> built in
during it's alpha. This means it'll randomy reboot - which can happen during SSH
sessions, but will hopefully help in the long run. Something to be aware of.</p>
</div>

### Installing ###

The CoreOS team have done an awesome job of walking you throug installing on their
[GitHub repo](https://github.com/coreos/coreos-vagrant).

Here's what you need to do:

1. Install Vagrant >= 1.3.1 and VirtualBox >= 4.0.  
   <small>Check your vagrant version by doing `vagrant --version`, and download the 
   new version from their website if you need to.</small>

2. Download the CoreOS vagrant file they've provided in the root of your
   development folder. This will install CoreOS in Vagrant.   
   [The vagrant file is here.](https://raw.github.com/coreos/coreos-vagrant/master/Vagrantfile)

3. Add port forwarding to the Vagrant file for web servers:   
   <code>config.vm.network :forwarded_port, guest: 80, host: 8080</code>

4. Note that *shared folders aren't enabled by default*.    
   Add these lines to your vagrant file to enable shared folders:   
	<code>config.vm.network "private_network", ip: "10.1.2.3"</code>
	<code>config.vm.synced_folder ".", "/home/core/share", id: "core", :nfs => true, :mount_options => ['nolock,vers=3,udp']</code> 

  <small>We've changed the IP address CoreOS gave us for the private network: the IP
  address they used is in the *public address space* (ie someone else's publicly
  accessable machine). The entire 10.X.X.X space is private, so this clears up
  collisions.</small>

You might recognise these steps: we've set up a vagrant file, added a URL to the
CoreOS distribution and set up a network for shared folders. It's very similar
to every other Vagrant setup, except without the Chef/Puppet/Ansible
provisioners.

CoreOS has also pre-installed docker, so there's no immediate provisioning or 
software installation need to do. Uber.

## Step 2: Setting up Docker ##

Docker is installed, but it requires a "base image" to work from. Huh? This is
the OS in which all of our containers will run from - essentially, the virtual
machine OS for each project.   
Let's use ubuntu:

<code data-language="shell">> docker pull ubuntu</code>

This downloads all of the Ubuntu base images (12.04, 12.10) for us to work with.
Lets confirm this worked by creating a new container (explanations below):

<code data-language="shell">> docker run -name="test" -t -i ubuntu /bin/bash</code>

Here's what we're doing in order:

1. Tell docker to start and run a new container (`docker run`)
2. Name the new container 'test' (`name="test"`).   
   <small>This'll allow us to manipulate the container with greater ease. Plus,
   you'll know what's what when you list your containers.</small>
3. Create a pseudo-terminal and keep it open (`-t -i`)
4. Use ubuntu as the base image for the new container (`ubuntu`)
5. Run `/bin/bash` inside the new container.

<div class='callout'>
	<p><strong>Docker always requires a process to run a container</strong>. Super important, that. 
	This has two consequences: containers aren't started without a process to run,
	and <strong>containers are killed when this process stops.</strong> We'll get to this later.</p>
</div>

You're now inside an Ubuntu container in CoreOS - a mini Ubuntu VM ready for you
to use.

## Step 3: Creating a dev environment

Now we can really get cracking with Docker. We're going to set up a basic LAMP
stack, which is easy to install via apt. Adjust this for your own stack as
necessary.

We're going to be manipulating containers via the command line here, *not* via
docker files. This is an introduction to how Docker works. 

### Initial setup ###

You're in the Ubuntu container, right? If not, run the command above to launch
Bash in an Ubuntu contianer.

The Ubuntu container is *very minimal*. A lot of things we'll need by default
aren't installed. Let's do the basics:

1. Add universe/multiverse to apt sources:   
   <code data-language="shell">> echo "$(cat /etc/apt/sources.list) universe multiverse" > /etc/apt/sources.list</code>   
   <small>This appends ' universe multiverse' to the apt-get source list. As we
said, this is a barebones Ubuntu install and these aren't available by
default.</small>
2. <code data-language='shell'>> apt-get update</code>
2. Install curl, wget, vim, build-essential, git:  
   <code data-language="shell">> apt-get install curl wget vim-tiny</code>

We're almost ready to get setting up our proper environment. First, lets commit
these changes to a new docker container so that we don't have to do this every
time (note: this is also why you use Dockerfiles.)

### Committing containers ###

Think of Docker like Git for operating systems.  We've just made a bunch of 
changes to Ubuntu, and we need to commit them to save our work.

Just like Git, Docker saves diffs for each container instead of the
entire system. This means we're only going to be saving the software that we
installed and files that we changed. Awesome!

1. Quit the Ubuntu container:   
   <code data-language="shell">> ctrl-d</code>   
   <small>This will kill our container. We started the container with the
`/bin/bash` process (`> docker run -name="test" -t -i ubuntu /bin/bash`), and when this starting process ends the container is
killed.</small>

2. List *all* docker containers:   
   <code data-language="shell">> docker ps -a</code>   
   <small>The -a flag lists all containers. `docker ps` lists running containers.</small>

3. We should see ours in the list:
  <div style='width: 100%; overflow: scroll'><pre data-language='shell' style='width: 1000px'>CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
4bf2ba69c69c        ubuntu:12.04        /bin/bash           5 seconds ago       Exit 0                                  test</pre></div>

4. Commit our changes to a new container:   
   <code data-language="shell">> docker commit test custom/base</code>   
   <small>We could have also written `docker commit 4bf2b custom/base` using the
   ID (instead of the name) to refer to to the container we changed.</small>

This creates a new container called `custom/base` with all of the changes made 
to its saved. We can boot this container up like Ubuntu by typing `docker run 
[...] custom/base` - it's ready to go.

Let's see our available containers by typing in `docker images`. You should see
a list of Ubuntu images, and the new `custom/base` image.

This is the basics: create a new container with some changes
(either through the command line or, preferably, by using [Docker
files](http://docs.docker.io/en/latest/use/builder/)), commit it and run.

### Setting up our stack ###

We're going to install a LAMP stack based off of the container that we just
created. Don't feel obligated to use these &ndash; install python, ruby, golang
- whatever you like.

First things first - let's create a new container for working with:

<code data-language='shell'>> docker run -name="lamp" -t -i custom/base /bin/bash</code>

The shell has loaded up inside the container we just modified, which has
universe and multiverse installed. Let's install myqsl, apache and PHP for our
basic stack.

<code data-language='shell'>> apt-get install apache2 mysql-server php5
libapache2-mod-php5</code>

Awesome. We'll skip over the configuration of these services - there are great
guides out there for it. Head over to the [Linode
Library](https://library.linode.com/) if you're stuck.

With the software installed and configured, we're ready to commit these changes
to a new container. Hit `ctrl-d` to get back to CoreOS, then commit the
container as we did above:

<code data-language='shell'>> docker commit lamp custom/lamp</code>


### Running the stack and forwarding ports ###

We're now at a point where we can start using our Docker conainer to develop
with. There's just a few prerequisites: forwarding ports, and getting
the database and web server to run without us having to start them manually.

Luckily, ports are easy from the command line (and even easier with
dockerfiles):

<code data-language='shell'>> docker run -t -i -p 80:80 -p 3306:3306 -v /home/core/vagrant/project:/var/www/project custom/lamp /bin/bash</code>

Here's what we did:

1. Run the container using a pseudo-shell again (`-t -i`)
2. Forwarded container ports 80 and 3306 to CoreOS's same ports (`-p 80:80 -p
   3306:3306`)
3. Mounted a volume from CoreOS to the container, which were also mounted from
   Vagrant. These are our project files which are on our macine during
   development (`-v /from:/to`)

Now, we can load `localhost:8080` (the port forwarded by Vagrant) to see the
webserver running from our container. Magic. Environment sorted - now we can
start to develop our apps.


## From here ##

You should be pretty adept at docker's high-level functions like commit, run,
and images, and with the guide should be able to create a working development
environment.

There's way more to do with docker though. A few good places to go are:

+ **[Using Supervisord with
  Docker](http://docs.docker.io/en/latest/examples/using_supervisord/)** - 
  There needs to be a process running in containers to keep them alive.
  Supervisord is a process manager that can be run in the foreground. Set up
  your services in the supervisord.conf file and run supervisord through docker to
  keep your container running.

+ **[Share images through Docker
  repositories](http://docs.docker.io/en/latest/use/workingwithrepository/)**
- Share your containers and images within your organisation. Keep your dev
  environments sane, and make production easier.

+ **[Managing database storage in
  docker](http://docs.docker.io/en/latest/use/working_with_volumes/)** - 
  Database storage (storage in general, actually) can be hard to manage in 
  Docker. A guide from Docker on volumes as storage. More info
[here](http://stackoverflow.com/questions/18496940/how-to-deal-with-persistent-storage-e-g-databases-in-docker),
[here](http://www.tech-d.net/2013/12/16/persistent-volumes-with-docker-container-as-volume-pattern/),
and [here](http://crosbymichael.com/advanced-docker-volumes.html).

+ **[Using dockerfiles](http://docs.docker.io/en/latest/use/builder/)** - 
  this'll keep you from having to provision containers by hand. It's chef,
  puppet, ansible or salt, but for containers.
