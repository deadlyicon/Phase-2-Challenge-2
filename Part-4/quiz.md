- When you run a command in the terminal, where does BASH look for that command?
~/bin

- On a UNIX computer, how do you stop a running process?
Control-c

- What packages do you have installed via homebrew?
aalib, gbdm, postgresql, autoconf, libffi, readline, automake, libyaml, ruby-install, bison, mysql, the_silver_searcher, chruby, openssl, tree, fzf, pcre, xz

- On a UNIX computer, how do you find the process id of a running process?
ps ax | grep (process)

- In a terminal, what does control-c do?
Creates a new line.
Close out of certain editors.
Stops processes.

- In a terminal, what does control-a do?
Moves cursor to the start of the line.

- In a terminal, what does control-e do?
Moves cursor to the end of the line.

- What keyboard shortcut do you use to split the screen in your editor?
Command-option-left/right arrow

- What keyboard shortcut do you use to split the screen in your terminal?
Command-option-left/right arrow

- When a terminal command completes, how can you tell if it was successful or not?
The command will run, and there will not be an error stating what was wrong about the command's terms.

- What does your `~/.gitconfig` have in it? (paste the whole file here)
[user]
	name = Doug L.
	email = douglubaway@gmail.com

- What is the difference between a relative and absolute path?
Relative paths point to a path while using your current working path.
Absolute paths point to one specific path, without using your current working path.

- Lets say you have the following file structure

  ```
  ~
  └── Projects
      ├── pinterest-for-dogs
      │   ├── README.md
      │   └── package.json
      └── linkedin-for-dancers
          ├── README.md
          └── package.json
  ```

  And you were in the `linkedin-for-dancers` folder. What command would you use to change folders to the `pinterest-for-dogs` folder?
cd ../pinterest-for-dogs

- What keyboard shortcut do you use, in your editor, when you want to open a specific file?
CMD + O

- What files or folders do you want all git repositories to ignore?
node_modules
.DS_Store for OSX computers

- What is the main difference between `==` and `===` in JavaScript?
== means vaguely equivalent to. It does not check types. 1 == "1" would be true.
=== means strictly equivalent to. It checks types. 1 === "1" would be false.
