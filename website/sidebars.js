module.exports = {
	docs: [
		{
			collapsed: true,
			type: 'category',
			label: 'Getting Started',
			items: [
				'Home',
				'What-Is-Premake',
				'Using-Premake',
				'Building-Premake'
			]
		},
		{
			collapsed: true,
			type: 'category',
			label: 'Writing Premake Scripts',
			items: [
				'Your-First-Script',
				'Workspaces-and-Projects',
				'Scopes-and-Inheritance',
				'Adding-Source-Files',
				'Linking',
				'Configurations-and-Platforms',
				'Filters',
				'Build-Settings',
				'Command-Line-Arguments',
				'Using-Modules',
				'Topics'
			]
		},
		{
			collapsed: true,
			type: 'category',
			label: 'Extending Premake',
			items: [
				'Extending-Premake',
				'Code-Overview',
				'Coding-Conventions',
				'Overrides-and-Call-Arrays',
				'Developing-Modules',
				'Adding-New-Action'
			]
		},
		{
			collapsed: true,
			type: 'category',
			label: 'Guides',
			items: [
				'Sharing-Configuration-Settings',
				'Embedding-Frameworks-in-Xcode'
			]
		},
		{
			collapsed: true,
			type: 'category',
			label: 'Reference',
			items: [
				{
					collapsed: true,
					type: 'category',
					label: 'Project Settings',
					items: [
						'allmodulespublic',
						'androidapilevel',
						'androidapplibname',
						'architecture',
						'assemblydebug',
						'atl',
						'basedir',
						'bindirs',
						'buildaction',
						'buildcommands',
						'buildcustomizations',
						'builddependencies',
						'buildinputs',
						'buildlog',
						'buildmessage',
						'buildoptions',
						'buildoutputs',
						'buildrule',
						'buildstlmodules',
						'callingconvention',
						'cdialect',
						'characterset',
						'clangtidy',
						'cleancommands',
						'cleanextensions',
						'clr',
						'compileas',
						'compilebuildoutputs',
						'configfile',
						'configmap',
						'configuration',
						'configurations',
						'conformancemode',
						'consumewinrtextension',
						'copylocal',
						'cppdialect',
						'csversion',
						'customtoolnamespace',
						'debug.prompt',
						'debugargs',
						'debugcommand',
						'debugconnectcommands',
						'debugdir',
						'debugenvs',
						'debugextendedprotocol',
						'debugformat',
						'debugger',
						'debuggerflavor',
						'debuggertype',
						'debugpathmap',
						'debugport',
						'debugremotehost',
						'debugsearchpaths',
						'debugstartupcommands',
						'debugtoolargs',
						'debugtoolcommand',
						'defaultplatform',
						'defines',
						'dependson',
						'deploymentoptions',
						'disablewarnings',
						'display',
						'documentationfile',
						'dotnetframework',
						'dotnetsdk',
						'dpiawareness',
						'editandcontinue',
						'editorintegration',
						'embed',
						'embedandsign',
						'enabledefaultcompileitems',
						'enablemodules',
						'enableunitybuild',
						'enablewarnings',
						'endian',
						'entrypoint',
						'exceptionhandling',
						'external',
						'externalanglebrackets',
						'externalincludedirs',
						'externalproject',
						'externalrule',
						'externalwarnings',
						'fastuptodate',
						'fatalwarnings',
						'fileextension',
						'filename',
						'files',
						'filter',
						'flags',
						'floatabi',
						'floatingpoint',
						'floatingpointexceptions',
						'forceincludes',
						'forceusings',
						'fpu',
						'framework',
						'frameworkdirs',
						'functionlevellinking',
						'gccprefix',
						'group',
						'icon',
						'ignoredefaultlibraries',
						'imageoptions',
						'imagepath',
						'implibdir',
						'implibextension',
						'implibname',
						'implibprefix',
						'implibsuffix',
						'includedirs',
						'includedirsafter',
						'inheritdependencies',
						'inlinesvisibility',
						'inlining',
						'intrinsics',
						'iosfamily',
						'isaextensions',
						'justmycode',
						'kind',
						'language',
						'largeaddressaware',
						'libdirs',
						'linkbuildoutputs',
						'linker',
						'linkgroups',
						'linkoptions',
						'links',
						'locale',
						'location',
						'llvmdir',
						'llvmversion',
						'makesettings',
						'namespace',
						'nativewchar',
						'newaction',
						'newoption',
						'nuget',
						'nugetsource',
						'objdir',
						'omitframepointer',
						'openmp',
						'optimize',
						'pchheader',
						'pchsource',
						'pic',
						'platforms',
						'postbuildcommands',
						'postbuildmessage',
						'prebuildcommands',
						'prebuildmessage',
						'preferredtoolarchitecture',
						'prelinkcommands',
						'prelinkmessage',
						'project',
						'propertydefinition',
						'rebuildcommands',
						'remotedeploydir',
						'remoteprojectdir',
						'remoteprojectrelativedir',
						'remoterootdir',
						'removeunreferencedcodedata',
						'resdefines',
						'resincludedirs',
						'resoptions',
						'resourcegenerator',
						'rtti',
						'rule',
						'rules',
						'runcodeanalysis',
						'runpathdirs',
						'runtime',
						'sanitize',
						'scanformoduledependencies',
						'shaderassembler',
						'shaderassembleroutput',
						'shaderdefines',
						'shaderentry',
						'shaderheaderfileoutput',
						'shaderincludedirs',
						'shadermodel',
						'shaderobjectfileoutput',
						'shaderoptions',
						'shadertype',
						'shadervariablename',
						'sharedlibtype',
						'startproject',
						'staticruntime',
						'stl',
						'strictaliasing',
						'stringpooling',
						'structmemberalign',
						'swiftversion',
						'symbols',
						'symbolspath',
						'sysincludedirs',
						'syslibdirs',
						'system',
						'systemversion',
						'tags',
						'tailcalls',
						'targetdir',
						'targetextension',
						'targetname',
						'targetprefix',
						'targetsuffix',
						'thumbmode',
						'toolchainversion',
						'toolset',
						'toolsversion',
						'undefines',
						'unsignedchar',
						'usefullpaths',
						'usestandardpreprocessor',
						'usingdirs',
						'uuid',
						'vectorextensions',
						'visibility',
						'vpaths',
						'vsprops',
						'warnings',
						'workspace',
						'xcodebuildresources',
						'xcodebuildsettings',
						'xcodecodesigningidentity',
						'xcodesystemcapabilities'
					]
				},
				{
					collapsed: true,
					type: 'category',
					label: 'Global Settings',
					items: [
						'gitintegration'
					]
				},
				{
					collapsed: true,
					type: 'category',
					label: 'Globals',
					items: [
						'globals/_ACTION',
						'globals/_ARGS',
						'globals/_MAIN_SCRIPT_DIR',
						'globals/_MAIN_SCRIPT',
						'globals/_OPTIONS',
						'globals/_OS',
						'globals/_PREMAKE_COMMAND',
						'globals/_PREMAKE_DIR',
						'globals/_PREMAKE_VERSION',
						'globals/_TARGET_ARCH',
						'globals/_TARGET_OS',
						'globals/_WORKING_DIR',
						'globals/dofileopt',
						'globals/iif',
						'globals/include',
						'globals/includeexternal',
						'globals/printf',
						'globals/require',
						'globals/verbosef',
					]
				},
				{
					collapsed: true,
					type: 'category',
					label: 'http',
					items: [
						'http/http.download',
						'http/http.get',
						'http/http.post',
						'http/http-options-table'
					]
				},
				{
					collapsed: true,
					type: 'category',
					label: 'io',
					items: [
						'io.readfile',
						'io.utf8',
						'io.writefile'
					]
				},
				{
					collapsed: true,
					type: 'category',
					label: 'json',
					items: [
						'json/json.decode',
						'json/json.encode'
					]
				},
				{
					collapsed: true,
					type: 'category',
					label: 'os',
					items: [
						'os/os.chdir',
						'os/os.chmod',
						'os/os.comparefiles',
						'os/os.copyfile',
						'os/os.execute',
						'os/os.executef',
						'os/os.findheader',
						'os/os.findlib',
						'os/os.get',
						'os/os.getcwd',
						'os/os.getenv',
						'os/os.getnumcpus',
						'os/os.getpass',
						'os/os.getSystemTags',
						'os/os.getversion',
						'os/os.host',
						'os/os.hostarch',
						'os/os.is',
						'os/os.is64bit',
						'os/os.isdir',
						'os/os.isfile',
						'os/os.islink',
						'os/os.istarget',
						'os/os.locate',
						'os/os.matchdirs',
						'os/os.matchfiles',
						'os/os.mkdir',
						'os/os.outputof',
						'os/os.pathsearch',
						'os/os.realpath',
						'os/os.remove',
						'os/os.rename',
						'os/os.rmdir',
						'os/os.stat',
						'os/os.target',
						'os/os.targetarch',
						'os/os.touchfile',
						'os/os.translateCommands',
						'os/os.uuid',
						'os/os.writefile_ifnotequal',
					]
				},
				{
					collapsed: true,
					type: 'category',
					label: 'path',
					items: [
						'path/path.appendExtension',
						'path/path.getabsolute',
						'path/path.getbasename',
						'path/path.getdirectory',
						'path/path.getdrive',
						'path/path.getextension',
						'path/path.getname',
						'path/path.getrelative',
						'path/path.hasextension',
						'path/path.isabsolute',
						'path/path.iscfile',
						'path/path.iscppfile',
						'path/path.iscppheader',
						'path/path.isframework',
						'path/path.islinkable',
						'path/path.isobjectfile',
						'path/path.isresourcefile',
						'path/path.join',
						'path/path.normalize',
						'path/path.rebase',
						'path/path.replaceextension',
						'path/path.translate',
						'path/path.wildcards',
					]
				},
				{
					collapsed: true,
					type: 'category',
					label: 'string',
					items: [
						'string/string.capitalized',
						'string/string.contains',
						'string/string.endswith',
						'string/string.escapepattern',
						'string/string.explode',
						'string/string.findlast',
						'string/string.hash',
						'string/string.lines',
						'string/string.plural',
						'string/string.sha1',
						'string/string.startswith'
					]
				},
				{
					collapsed: true,
					type: 'category',
					label: 'table',
					items: [
						'table/table.arraycopy',
						'table/table.contains',
						'table/table.deepcopy',
						'table/table.extract',
						'table/table.filterempty',
						'table/table.flatten',
						'table/table.fold',
						'table/table.foreachi',
						'table/table.implode',
						'table/table.indexof',
						'table/table.insertafter',
						'table/table.insertflat',
						'table/table.isempty',
						'table/table.join',
						'table/table.keys',
						'table/table.merge',
						'table/table.replace',
						'table/table.tostring',
						'table/table.translate',
					]
				},
				{
					collapsed: true,
					type: 'category',
					label: 'term',
					items: [
						'term/term.getTextColor',
						'term/term.setTextColor',
						'term/term.popColor',
						'term/term.pushColor',
						'term/term.clearToEndOfLine',
						'term/term.moveLeft'
					]
				},
				{
					collapsed: true,
					type: 'category',
					label: 'zip',
					items: [
						'zip/zip.extract'
					]
				}
			],
		}
	],
};
