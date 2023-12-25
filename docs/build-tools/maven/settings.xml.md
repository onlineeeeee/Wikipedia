---
sidebar_position: 1
sidebar_label: Settings.xml配置
sidebar_class_name: green
---

&emsp;Maven中有一些配置项不应该绑定到特定项目的pom.xml中（其中包括本地存储库位置、备用远程存储库服务器和身份验证信息等），所以Maven提供了全局的settings.xml配置文件。

settings.xml文件可能存在于下面两个位置：
- Maven 安装路径下：$\{maven.home\}/conf/settings.xml
- 用户目录下：$\{user.home\}/.m2/settings.xml


&emsp;Maven安装路径下的settings.xml也称为全局设置，用户目录下的settings.xml称为用户设置。如果两个文件同时存在，Maven运行时他们的内容将被合并，并且用户目录下的settings.xml将占据主导地位。

## 默认配置
```xml
<?xml version="1.0" encoding="UTF-8"?>

<!--
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.
-->

<!--
 | This is the configuration file for Maven. It can be specified at two levels:
 |
 |  1. User Level. This settings.xml file provides configuration for a single user,
 |                 and is normally provided in ${user.home}/.m2/settings.xml.
 |
 |                 NOTE: This location can be overridden with the CLI option:
 |
 |                 -s /path/to/user/settings.xml
 |
 |  2. Global Level. This settings.xml file provides configuration for all Maven
 |                 users on a machine (assuming they're all using the same Maven
 |                 installation). It's normally provided in
 |                 ${maven.conf}/settings.xml.
 |
 |                 NOTE: This location can be overridden with the CLI option:
 |
 |                 -gs /path/to/global/settings.xml
 |
 | The sections in this sample file are intended to give you a running start at
 | getting the most out of your Maven installation. Where appropriate, the default
 | values (values used when the setting is not specified) are provided.
 |
 |-->
<settings xmlns="http://maven.apache.org/SETTINGS/1.2.0"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.2.0 https://maven.apache.org/xsd/settings-1.2.0.xsd">
    <!-- localRepository
     | The path to the local repository maven will use to store artifacts.
     |
     | Default: ${user.home}/.m2/repository
    <localRepository>/path/to/local/repo</localRepository>
    -->

    <!-- interactiveMode
     | This will determine whether maven prompts you when it needs input. If set to false,
     | maven will use a sensible default value, perhaps based on some other setting, for
     | the parameter in question.
     |
     | Default: true
    <interactiveMode>true</interactiveMode>
    -->

    <!-- offline
     | Determines whether maven should attempt to connect to the network when executing a build.
     | This will have an effect on artifact downloads, artifact deployment, and others.
     |
     | Default: false
    <offline>false</offline>
    -->

    <!-- pluginGroups
     | This is a list of additional group identifiers that will be searched when resolving plugins by their prefix, i.e.
     | when invoking a command line like "mvn prefix:goal". Maven will automatically add the group identifiers
     | "org.apache.maven.plugins" and "org.codehaus.mojo" if these are not already contained in the list.
     |-->
    <pluginGroups>
        <!-- pluginGroup
         | Specifies a further group identifier to use for plugin lookup.
        <pluginGroup>com.your.plugins</pluginGroup>
        -->
    </pluginGroups>

    <!-- TODO Since when can proxies be selected as depicted? -->
    <!-- proxies
     | This is a list of proxies which can be used on this machine to connect to the network.
     | Unless otherwise specified (by system property or command-line switch), the first proxy
     | specification in this list marked as active will be used.
     |-->
    <proxies>
        <!-- proxy
         | Specification for one proxy, to be used in connecting to the network.
         |
        <proxy>
          <id>optional</id>
          <active>true</active>
          <protocol>http</protocol>
          <username>proxyuser</username>
          <password>proxypass</password>
          <host>proxy.host.net</host>
          <port>80</port>
          <nonProxyHosts>local.net|some.host.com</nonProxyHosts>
        </proxy>
        -->
    </proxies>

    <!-- servers
     | This is a list of authentication profiles, keyed by the server-id used within the system.
     | Authentication profiles can be used whenever maven must make a connection to a remote server.
     |-->
    <servers>
        <!-- server
         | Specifies the authentication information to use when connecting to a particular server, identified by
         | a unique name within the system (referred to by the 'id' attribute below).
         |
         | NOTE: You should either specify username/password OR privateKey/passphrase, since these pairings are
         |       used together.
         |
        <server>
          <id>deploymentRepo</id>
          <username>repouser</username>
          <password>repopwd</password>
        </server>
        -->

        <!-- Another sample, using keys to authenticate.
        <server>
          <id>siteServer</id>
          <privateKey>/path/to/private/key</privateKey>
          <passphrase>optional; leave empty if not used.</passphrase>
        </server>
        -->
    </servers>

    <!-- mirrors
     | This is a list of mirrors to be used in downloading artifacts from remote repositories.
     |
     | It works like this: a POM may declare a repository to use in resolving certain artifacts.
     | However, this repository may have problems with heavy traffic at times, so people have mirrored
     | it to several places.
     |
     | That repository definition will have a unique id, so we can create a mirror reference for that
     | repository, to be used as an alternate download site. The mirror site will be the preferred
     | server for that repository.
     |-->
    <mirrors>
        <!-- mirror
         | Specifies a repository mirror site to use instead of a given repository. The repository that
         | this mirror serves has an ID that matches the mirrorOf element of this mirror. IDs are used
         | for inheritance and direct lookup purposes, and must be unique across the set of mirrors.
         |
        <mirror>
          <id>mirrorId</id>
          <mirrorOf>repositoryId</mirrorOf>
          <name>Human Readable Name for this Mirror.</name>
          <url>http://my.repository.com/repo/path</url>
        </mirror>
         -->
        <mirror>
            <id>maven-default-http-blocker</id>
            <mirrorOf>external:http:*</mirrorOf>
            <name>Pseudo repository to mirror external repositories initially using HTTP.</name>
            <url>http://0.0.0.0/</url>
            <blocked>true</blocked>
        </mirror>
    </mirrors>

    <!-- profiles
     | This is a list of profiles which can be activated in a variety of ways, and which can modify
     | the build process. Profiles provided in the settings.xml are intended to provide local machine-
     | specific paths and repository locations which allow the build to work in the local environment.
     |
     | For example, if you have an integration testing plugin - like cactus - that needs to know where
     | your Tomcat instance is installed, you can provide a variable here such that the variable is
     | dereferenced during the build process to configure the cactus plugin.
     |
     | As noted above, profiles can be activated in a variety of ways. One way - the activeProfiles
     | section of this document (settings.xml) - will be discussed later. Another way essentially
     | relies on the detection of a property, either matching a particular value for the property,
     | or merely testing its existence. Profiles can also be activated by JDK version prefix, where a
     | value of '1.4' might activate a profile when the build is executed on a JDK version of '1.4.2_07'.
     | Finally, the list of active profiles can be specified directly from the command line.
     |
     | NOTE: For profiles defined in the settings.xml, you are restricted to specifying only artifact
     |       repositories, plugin repositories, and free-form properties to be used as configuration
     |       variables for plugins in the POM.
     |
     |-->
    <profiles>
        <!-- profile
         | Specifies a set of introductions to the build process, to be activated using one or more of the
         | mechanisms described above. For inheritance purposes, and to activate profiles via <activatedProfiles/>
         | or the command line, profiles have to have an ID that is unique.
         |
         | An encouraged best practice for profile identification is to use a consistent naming convention
         | for profiles, such as 'env-dev', 'env-test', 'env-production', 'user-jdcasey', 'user-brett', etc.
         | This will make it more intuitive to understand what the set of introduced profiles is attempting
         | to accomplish, particularly when you only have a list of profile id's for debug.
         |
         | This profile example uses the JDK version to trigger activation, and provides a JDK-specific repo.
        <profile>
          <id>jdk-1.4</id>
    
          <activation>
            <jdk>1.4</jdk>
          </activation>
    
          <repositories>
            <repository>
              <id>jdk14</id>
              <name>Repository for JDK 1.4 builds</name>
              <url>http://www.myhost.com/maven/jdk14</url>
              <layout>default</layout>
              <snapshotPolicy>always</snapshotPolicy>
            </repository>
          </repositories>
        </profile>
        -->

        <!--
         | Here is another profile, activated by the property 'target-env' with a value of 'dev', which
         | provides a specific path to the Tomcat instance. To use this, your plugin configuration might
         | hypothetically look like:
         |
         | ...
         | <plugin>
         |   <groupId>org.myco.myplugins</groupId>
         |   <artifactId>myplugin</artifactId>
         |
         |   <configuration>
         |     <tomcatLocation>${tomcatPath}</tomcatLocation>
         |   </configuration>
         | </plugin>
         | ...
         |
         | NOTE: If you just wanted to inject this configuration whenever someone set 'target-env' to
         |       anything, you could just leave off the <value/> inside the activation-property.
         |
        <profile>
          <id>env-dev</id>
    
          <activation>
            <property>
              <name>target-env</name>
              <value>dev</value>
            </property>
          </activation>
    
          <properties>
            <tomcatPath>/path/to/tomcat/instance</tomcatPath>
          </properties>
        </profile>
        -->
    </profiles>

    <!-- activeProfiles
     | List of profiles that are active for all builds.
     |
    <activeProfiles>
      <activeProfile>alwaysActiveProfile</activeProfile>
      <activeProfile>anotherAlwaysActiveProfile</activeProfile>
    </activeProfiles>
    -->
</settings>
```

## 顶层标签概览
```xml
<settings 
    xmlns="http://maven.apache.org/SETTINGS/1.2.0" 
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.2.0 http://maven.apache.org/xsd/settings-1.2.0.xsd">
  <localRepository/>
  <interactiveMode/>
  <usePluginRegistry/>
  <offline/>
 
  <proxies>
    <proxy>
      <active/>
      <protocol/>
      <username/>
      <password/>
      <port/>
      <host/>
      <nonProxyHosts/>
      <id/>
    </proxy>
  </proxies>
 
  <servers>
    <server>
      <username/>
      <password/>
      <privateKey/>
      <passphrase/>
      <filePermissions/>
      <directoryPermissions/>
      <configuration/>
      <id/>
    </server>
  </servers>
 
  <mirrors>
    <mirror>
      <mirrorOf/>
      <name/>
      <url/>
      <layout/>
      <mirrorOfLayouts/>
      <blocked/>
      <id/>
    </mirror>
  </mirrors>
 
  <profiles>
    <profile>
      <activation>
        <activeByDefault/>
        <jdk/>
        <os>
          <name/>
          <family/>
          <arch/>
          <version/>
        </os>
        <property>
          <name/>
          <value/>
        </property>
        <file>
          <missing/>
          <exists/>
        </file>
      </activation>
      <properties>
        <key>value</key>
      </properties>
 
      <repositories>
        <repository>
          <releases>
            <enabled/>
            <updatePolicy/>
            <checksumPolicy/>
          </releases>
          <snapshots>
            <enabled/>
            <updatePolicy/>
            <checksumPolicy/>
          </snapshots>
          <id/>
          <name/>
          <url/>
          <layout/>
        </repository>
      </repositories>
      <pluginRepositories>
        <pluginRepository>
          <releases>
            <enabled/>
            <updatePolicy/>
            <checksumPolicy/>
          </releases>
          <snapshots>
            <enabled/>
            <updatePolicy/>
            <checksumPolicy/>
          </snapshots>
          <id/>
          <name/>
          <url/>
          <layout/>
        </pluginRepository>
      </pluginRepositories>
      <id/>
    </profile>
  </profiles>
 
  <activeProfiles/>
  <pluginGroups/>
</settings>
```

## 配置项详解

### localRepository
&emsp;该配置项表示Maven构建系统本地仓库的路径, 默认值: $\{user.home\}/.m2/repository

### interactiveMode
&emsp;Maven是否开启交互模式以获得用户输入, Boolean值, 默认true

### usePluginRegistry
&emsp;Maven是否应该使用 plugin-registry.xml 文件来管理插件版本, Boolean值, 默认false

### offline
&emsp;是否允许Maven进行项目编译(compile)和部署(deploy)等操作时联网下载所需要的信息. 设置为true表示构建系统需要再离线模式下运行, 反之为false. 当由于网络设置或者安全因素等原因，构建服务器不能连接远程仓库的时候, 就可以使用该配置项. 类型为布尔值, 默认false

### proxies
&emsp;用于配置代理列表。对于在笔记本电脑或其他移动平台上工作的任何人来说，多个代理配置文件可能会派上用场，只需从命令行或指定profile id，即可轻松切换整个代理配置。
```xml
<proxies>
  <!-- 代理元素包含配置代理时需要的信息 -->
  <proxy>
    <!-- 代理的唯一定义符，用来区分不同的代理元素。默认值是default -->
    <id>proxyId</id>
    <!-- 
        该代理是否是激活的那个。true则激活代理。
        当我们声明了一组代理，而某个时候只需要激活一个代理的时候，该元素就可以派上用处。 
    -->
    <active>true</active>
    <!--代理的协议。 协议://主机名:端口，分隔成离散的元素以方便配置。 -->
    <protocol>http</protocol>
    <!--代理的主机名。协议://主机名:端口，分隔成离散的元素以方便配置。 -->
    <host>proxy.somewhere.com</host>
    <!--代理的端口。协议://主机名:端口，分隔成离散的元素以方便配置。 -->
    <port>8080</port>
    <!--代理的用户名，用户名和密码表示代理服务器认证的登录名和密码。 -->
    <username>username</username>
    <!--代理的密码，用户名和密码表示代理服务器认证的登录名和密码。 -->
    <password>password</password>
    <!--不该被代理的主机名列表。该列表的分隔符由代理服务器指定；例子中使用了竖线分隔符，使用逗号分隔也很常见。 -->
    <nonProxyHosts>*.google.com|ibiblio.org</nonProxyHosts>
  </proxy>
</proxies>
```

### servers
&emsp;一般来说，仓库的下载和部署是在pom.xml文件中的 repositories 和 distributionManagement 元素中定义的。然而一些类似用户名、密码（有些仓库访问是需要安全认证的）等信息不应该在pom.xml文件中配置，这些信息可以配置在 settings.xml 中。
```xml
<!-- 
  配置服务端的一些设置。
  一些设置如安全证书不应该和pom.xml一起分发。
  这种类型的信息应该存在于构建服务器上的settings.xml文件中。 
-->
<servers>
  <!-- 服务器元素包含配置服务器时需要的信息 -->
  <server>
    <!-- 这是server的id（注意不是用户登陆的id），该id与distributionManagement中repository元素的id相匹配。 -->
    <id>server001</id>
    <!-- 鉴权用户名。鉴权用户名和鉴权密码表示服务器认证所需要的登录名和密码。 -->
    <username>my_login</username>
    <!-- 鉴权密码 。鉴权用户名和鉴权密码表示服务器认证所需要的登录名和密码。密码加密功能已被添加到2.1.0 +。详情请访问密码加密页面 -->
    <password>my_password</password>
    <!-- 鉴权时使用的私钥位置。和前两个元素类似，私钥位置和私钥密码指定了一个私钥的路径（默认是${user.home}/.ssh/id_dsa）以及如果需要的话，一个密语。将来passphrase和password元素可能会被提取到外部，但目前它们必须在settings.xml文件以纯文本的形式声明。 -->
    <privateKey>${usr.home}/.ssh/id_dsa</privateKey>
    <!-- 鉴权时使用的私钥密码。 -->
    <passphrase>some_passphrase</passphrase>
    <!-- 文件被创建时的权限。如果在部署的时候会创建一个仓库文件或者目录，这时候就可以使用权限（permission）。这两个元素合法的值是一个三位数字，其对应了unix文件系统的权限，如664，或者775。 -->
    <filePermissions>664</filePermissions>
    <!-- 目录被创建时的权限。 -->
    <directoryPermissions>775</directoryPermissions>
    <!-- 传输层的额外配置 -->
    <configuration></configuration>
  </server>
</servers>
```
### mirrors
&emsp;用于定义一系列的远程仓库的镜像。我们可以在pom中定义一个下载工件的时候所使用的远程仓库。

&emsp;但是有时候这个远程仓库会比较忙，所以这个时候人们就想着给它创建镜像以缓解远程仓库的压力，也就是说会把对远程仓库的请求转换到对其镜像地址的请求。

&emsp;每个远程仓库都会有一个id，这样我们就可以创建自己的mirror来关联到该仓库，那么以后需要从远程仓库下载工件的时候Maven就可以从我们定义好的mirror站点来下载，这可以很好的缓解我们远程仓库的压力。 在我们定义的mirror中每个远程仓库都只能有一个mirror与它关联，也就是说你不能同时配置多个mirror的mirrorOf指向同一个repositoryId。
```xml
<mirrors>
  <!-- 给定仓库的下载镜像。 -->
  <mirror>
    <!-- 该镜像的唯一标识符。id用来区分不同的mirror元素。 -->
    <id>mirrorId</id>
    <!-- 镜像名称 -->
    <name>PlanetMirror Australia</name>
    <!-- 该镜像的URL。构建系统会优先考虑使用该URL，而非使用默认的服务器URL。 -->
    <url>http://downloads.planetmirror.com/pub/maven2</url>
    <!-- 被镜像的服务器的id。例如，如果我们要设置了一个Maven中央仓库（http://repo.maven.apache.org/maven2/）的镜像，就需要将该元素设置成central。这必须和中央仓库的id central完全一致。 -->
    <mirrorOf>repositoryId</mirrorOf>
    <!-- 镜像存储库的布局，默认值default -->
    <layout>default</layout>
    <!-- 要镜像的存储库的布局。此值可用于将镜像的使用限制为具有匹配布局（匹配的 ID 除外）的存储库，默认值default,legacy -->
    <mirrorOfLayouts>default,legacy</mirrorOfLayouts>
    <!-- 是否应阻止此镜像进入任何下载请求，但下载过程失败，并解释原因。默认false -->
    <blocked>false</blocked>
  </mirror>
</mirrors>
```
### profiles
&emsp;根据环境参数来调整构建配置的列表。

&emsp;settings.xml中的profile元素是pom.xml中profile元素的裁剪版本。它包含了id、activation、repositories、pluginRepositories和 properties元素。

&emsp;这里的profile元素只包含这五个子元素是因为这里只关心构建系统这个整体（这正是settings.xml文件的角色定位），而非单独的项目对象模型设置。如果一个settings.xml中的profile被激活，它的值会覆盖任何其它定义在pom.xml中带有相同id的profile。当所有的约束条件都满足的时候就会激活这个profile。
```xml
<profiles>
    <profile>
        <!-- profile的唯一标识 -->
        <id>test</id>     
        <!-- 自动触发profile的条件逻辑 -->
        <activation>
            <!-- 是否默认激活 -->
            <activeByDefault>false</activeByDefault>
            <!-- 如果JDK版本匹配的话激活 -->
            <jdk>1.6</jdk>
            <!-- 如果操作系统匹配的话激活 -->
            <os>
                <name>Windows 7</name>
                <family>Windows</family>
                <arch>x86</arch>
                <version>5.1.2600</version>
            </os>
            <!-- 如果配置项存在的话激活 -->
            <property>
                <name>mavenVersion</name>
                <value>2.0.3</value>
            </property>
            <!-- 如果文件存在/不存在的话激活 -->
            <file>
                <exists>${basedir}/file2.properties</exists>
                <missing>${basedir}/file1.properties</missing>
            </file>
        </activation>
        <!-- 扩展属性列表 -->
        <properties />
        <!-- 远程仓库列表 -->
        <repositories />
        <!-- 插件仓库列表 -->
        <pluginRepositories />
      ...
    </profile>
</profiles>
```
### activation
&emsp;自动触发profile的条件逻辑。这是profile中最重要的元素。跟pom.xml中的profile一样，settings.xml中的profile也可以在特定环境下改变一些值，而这些环境是通过activation元素来指定的。activation元素并不是激活profile的唯一方式。settings.xml文件中的activeProfile元素可以包含profile的id。profile也可以通过在命令行，使用-P标记和逗号分隔的列表来显式的激活（如，-P test）。

**_activeByDefault_**

当其值为true的时候表示如果没有其他的profile处于激活状态的时候，该profile将自动被激活。

**_jdk_**

表示当jdk的版本满足条件的时候激活，在这里是1.6。这里的版本还可以用一个范围来表示，如　 [1.4,1.7) 表示1.4、1.5和1.6满足； [1.4,1.7] 表示1.4、1.5、1.6和1.7满足；

**_os_**

表示当操作系统满足条件的时候激活。

**_property_**

property是键值对的形式，表示当Maven检测到了这样一个键值对的时候就激活该profile。

* 下面的示例表示当存在属性hello的时候激活该profile。
```xml
<property>
    <name>hello</name>
</property>
```
* 下面的示例表示当属性hello的值为world的时候激活该profile。
```xml
<property>
    <name>hello</name>
    <value>world</value>
</property>
```
这个时候如果要激活该profile的话，可以在调用Maven指令的时候加上参数hello并指定其值为world，如：**_mvn compile –Dhello=world_**

**_file_**

表示当文件存在或不存在的时候激活，exists表示存在，missing表示不存在。如下面例子表示当文件hello/world不存在的时候激活该profile。
```xml
<profile>
    <activation>
        <file>
            <missing>hello/world</missing>
        </file>
    </activation>
</profile>
```

**_properties_**

用于定义属性键值对的。当该profile是激活状态的时候，properties下面指定的属性都可以在pom.xml中使用。

对应profile的扩展属性列表。 maven属性和ant中的属性一样，可以用来存放一些值。这些值可以在pom.xml中的任何地方使用标记$\{X\}来使用，这里X是指属性的名称。属性有五种不同的形式，并且都能在settings.xml文件中访问。

注： 如果以下配置的profile被激活，则可以在pom.xml中使用 $\{user.install\} 。
```xml
<!--
  1. env.X: 在一个变量前加上"env."的前缀，会返回一个shell环境变量。例如,"env.PATH"指代了$path环境变量（在Windows上是%PATH%）。
  2. project.x：指代了POM中对应的元素值。例如: <project><version>1.0</version></project>通过${project.version}获得version的值。
  3. settings.x: 指代了settings.xml中对应元素的值。例如：<settings><offline>false</offline></settings>通过 ${settings.offline}获得offline的值。
  4. Java System Properties: 所有可通过java.lang.System.getProperties()访问的属性都能在POM中使用该形式访问，例如 ${java.home}。
  5. x: 在<properties/>元素中，或者外部文件中设置，以${someVar}的形式使用。
 -->
<properties>
    <user.install>${user.home}/our-project</user.install>
</properties>
```

**_repositories_**

用于定义远程仓库的，当该profile是激活状态的时候，这里面定义的远程仓库将作为当前pom的远程仓库。它是maven用来填充构建系统本地仓库所使用的一组远程仓库。
```xml
<repositories>
  <!--包含需要连接到远程仓库的信息 -->
  <repository>
    <!--远程仓库唯一标识 -->
    <id>codehausSnapshots</id>
    <!--远程仓库名称 -->
    <name>Codehaus Snapshots</name>
    <!--如何处理远程仓库里发布版本的下载 -->
    <releases>
      <!--true或者false表示该仓库是否为下载某种类型构件（发布版，快照版）开启。 -->
      <enabled>false</enabled>
      <!--该元素指定更新发生的频率。Maven会比较本地POM和远程POM的时间戳。这里的选项是：always（一直），daily（默认，每日），interval：X（这里X是以分钟为单位的时间间隔），或者never（从不）。 -->
      <updatePolicy>always</updatePolicy>
      <!--当Maven验证构件校验文件失败时该怎么做-ignore（忽略），fail（失败），或者warn（警告）。 -->
      <checksumPolicy>warn</checksumPolicy>
    </releases>
    <!--如何处理远程仓库里快照版本的下载。有了releases和snapshots这两组配置，POM就可以在每个单独的仓库中，为每种类型的构件采取不同的策略。例如，可能有人会决定只为开发目的开启对快照版本下载的支持。参见repositories/repository/releases元素 -->
    <snapshots>
      <enabled />
      <updatePolicy />
      <checksumPolicy />
    </snapshots>
    <!--远程仓库URL，按protocol://hostname/path形式 -->
    <url>http://snapshots.maven.codehaus.org/maven2</url>
    <!--用于定位和排序构件的仓库布局类型-可以是default（默认）或者legacy（遗留）。Maven 2为其仓库提供了一个默认的布局；然而，Maven 1.x有一种不同的布局。我们可以使用该元素指定布局是default（默认）还是legacy（遗留）。 -->
    <layout>default</layout>
  </repository>
</repositories>
```
1. releases、snapshots：这是对于工件的类型的限制。
2. enabled：表示这个仓库是否允许这种类型的工件
3. updatePolicy：表示多久尝试更新一次。可选值有always、daily、interval:minutes（表示每多久更新一次）和never。
4. checksumPolicy：当Maven在部署项目到仓库的时候会连同校验文件一起提交，checksumPolicy表示当这个校验文件缺失或不正确的时候该如何处理，可选项有ignore、fail和warn。

**_pluginRepositories_**

在Maven中有两种类型的仓库，一种是存储工件的仓库，另一种就是存储plugin插件的仓库。

pluginRepositories的定义和repositories的定义类似，它表示Maven在哪些地方可以找到所需要的插件。和repository类似，只是repository是管理jar包依赖的仓库，pluginRepositories则是管理插件的仓库。

maven插件是一种特殊类型的构件。由于这个原因，插件仓库独立于其它仓库。pluginRepositories元素的结构和repositories元素的结构类似。每个pluginRepository元素指定一个Maven可以用来寻找新插件的远程地址。
```xml
<pluginRepositories>
  <!-- 包含需要连接到远程插件仓库的信息.参见profiles/profile/repositories/repository元素的说明 -->
  <pluginRepository>
    <releases>
      <enabled />
      <updatePolicy />
      <checksumPolicy />
    </releases>
    <snapshots>
      <enabled />
      <updatePolicy />
      <checksumPolicy />
    </snapshots>
    <id />
    <name />
    <url />
    <layout />
  </pluginRepository>
</pluginRepositories>
```

### activeProfiles
&emsp;手动激活profiles的列表，按照profile被应用的顺序定义activeProfile。

&emsp;该元素包含了一组activeProfile元素，每个activeProfile都含有一个profile id。任何在activeProfile中定义的profile id，不论环境设置如何，其对应的 profile都会被激活。如果没有匹配的profile，则什么都不会发生。

例如，env-test是一个activeProfile，则在pom.xml（或者profile.xml）中对应id的profile会被激活。如果运行过程中找不到这样一个profile，Maven则会像往常一样运行。
```xml
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0
                      https://maven.apache.org/xsd/settings-1.2.0.xsd">
	  ...
	  <activeProfiles>
	    <!-- 要激活的profile id -->
	    <activeProfile>env-test</activeProfile>
	  </activeProfiles>
  ...
</settings>
```

### pluginGroups
&emsp;在pluginGroups元素下面可以定义一系列的pluginGroup元素。表示当通过plugin的前缀来解析plugin的时候到哪里寻找。pluginGroup元素指定的是plugin的groupId。默认情况下，Maven会自动把 org.apache.maven.plugins 和 org.codehaus.mojo 添加到pluginGroups下。
```xml
<pluginGroups>
   <!-- pluginGroup
    | Specifies a further group identifier to use for plugin lookup.
   <pluginGroup>com.your.plugins</pluginGroup>
   -->
   <!--<pluginGroup>org.sonarsource.scanner.maven</pluginGroup> -->
 </pluginGroups>
```