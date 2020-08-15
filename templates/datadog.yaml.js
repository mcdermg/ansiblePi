{{ '{{' }} if .Common {{ '{{' }}
#########################
## Basic Configuration ##
#########################

## @param api_key - string - required
## The Datadog API key to associate your Agent's data with your organization.
## Create a new API key here: https://app.datadoghq.com/account/settings

api_key: {{ datadog_api_key }}

## @param site - string - optional - default: datadoghq.com
## The site of the Datadog intake to send Agent data to.
## Set to 'datadoghq.eu' to send data to the EU site.

  site: {{ datadog_site }}

## @param dd_url - string - optional - default: https://app.datadoghq.com
## The host of the Datadog intake server to send metrics to, only set this option
## if you need the Agent to send metrics to a custom URL, it overrides the site
## setting defined in "site". It does not affect APM, Logs or Live Process intake which have their
## own "*_dd_url" settings.
#
# dd_url: https://app.datadoghq.com

## @param proxy - custom object - optional
## If you need a proxy to connect to the Internet, provide it here (default:
## disabled). Refer to https://docs.datadoghq.com/agent/proxy/ to understand how to use these settings.
## For Logs proxy information, refer to https://docs.datadoghq.com/agent/proxy/#proxy-for-logs
#
# proxy:
#   https: http://<USERNAME>:<PASSWORD>@<PROXY_SERVER_FOR_HTTPS>:<PORT>
#   http: http://<USERNAME>:<PASSWORD>@<PROXY_SERVER_FOR_HTTP>:<PORT>
#   no_proxy:
#     - <HOSTNAME-1>
#     - <HOSTNAME-2>

## @param skip_ssl_validation - boolean - optional - default: false
## Setting this option to "true" tells the Agent to skip validation of SSL/TLS certificates.
#
# skip_ssl_validation: false

## @param force_tls_12 - boolean - optional - default: false
## Setting this option to "true" forces the Agent to only use TLS 1.2 when
## pushing data to the Datadog intake specified in "site" or "dd_url".
#
# force_tls_12: false

## @param hostname - string - optional - default: auto-detected
## Force the hostname name.
#
# hostname: <HOSTNAME_NAME>

## @param hostname_fqdn - boolean - optional - default: false
## When the Agent relies on the OS to determine the hostname, make it use the
## FQDN instead of the short hostname. Recommended value: true
## More information at https://dtdg.co/flag-hostname-fqdn
#
# hostname_fqdn: false

## @param tags  - list of key:value elements - optional
## List of host tags. Attached in-app to every metric, event, log, trace, and service check emitted by this Agent.
##
## Learn more about tagging: https://docs.datadoghq.com/tagging/
#
# tags:
#   - environment:dev
#   - <TAG_KEY>:<TAG_VALUE>

## @param env - string - optional
## The environment name where the agent is running. Attached in-app to every
## metric, event, log, trace, and service check emitted by this Agent.
#
# env: <environment name>

## @param tag_value_split_separator - list of key:value elements - optional
## Split tag values according to a given separator. Only applies to host tags,
## and tags coming from container integrations. It does not apply to tags on dogstatsd metrics,
## and tags collected by other integrations.
##
## Example use-case:
##
##  With a raw collected tag "foo:1;2;3", using the following configuration:
##
##  tag_value_split_separator:
##    foo: ;
##
##  results in the raw tag being transformed into "foo:1", "foo:2", "foo:3" tags
#
# tag_value_split_separator:
#   - <TAG_KEY>: <SEPARATOR>

## @param checks_tag_cardinality - string - optional - default: low
## Configure the level of granularity of tags to send for checks metrics and events. Choices are:
##   * low: add tags about low-cardinality objects (clusters, hosts, deployments, container images, ...)
##   * orchestrator: add tags about pod, (in Kubernetes), or task (in ECS or Mesos) -level of cardinality
##   * high: add tags about high-cardinality objects (individual containers, user IDs in requests, ...)
## WARNING: sending container tags for checks metrics may create more metrics
## (one per container instead of one per host). This may impact your custom metrics billing.
#
# checks_tag_cardinality: low

## @param dogstatsd_tag_cardinality - string - optional - default: low
## Configure the level of granularity of tags to send for DogStatsD metrics and events. Choices are:
##   * low: add tags about low-cardinality objects (clusters, hosts, deployments, container images, ...)
##   * orchestrator: add tags about pod, (in Kubernetes), or task (in ECS or Mesos) -level of cardinality
##   * high: add tags about high-cardinality objects (individual containers, user IDs in requests, ...)
##
## WARNING: sending container tags for dogstatsd metrics may create more metrics
## (one per container instead of one per host). This may impact your custom metrics billing.
#
# dogstatsd_tag_cardinality: low

## @param histogram_aggregates - list of strings - optional - default: ["max", "median", "avg", "count"]
## Configure which aggregated value to compute.
## Possible values are: min, max, median, avg, sum and count.
#
# histogram_aggregates:
#   - max
#   - median
#   - avg
#   - count

## @param histogram_percentiles - list of strings - optional - default: ["0.95"]
## Configure which percentiles are computed by the Agent. It must be a list of float between 0 and 1.
## Warning: percentiles must be specified as yaml strings
#
# histogram_percentiles:
#   - "0.95"

## @param histogram_copy_to_distribution - boolean - optional - default: false
## Copy histogram values to distributions for true global distributions (in beta)
## Note: This increases the number of custom metrics created.
#
# histogram_copy_to_distribution: false

## @param histogram_copy_to_distribution_prefix - string - optional
## A prefix to add to distribution metrics created when histogram_copy_to_distributions is true
#
# histogram_copy_to_distribution_prefix: "<PREFIX>"

## @param aggregator_stop_timeout - integer - optional - default: 2
## When stopping the agent, the Aggregator will try to flush out data ready for
## aggregation (metrics, events, ...). Data are flushed to the Forwarder in order
## to be sent to DataDog, therefore the Agent might take at most
## 'aggregator_stop_timeout'+'forwarder_stop_timeout' seconds to exit.
##
## You can set the maximum amount of time, in seconds, allocated to the
## Aggregator to do so. You can disable this feature by setting
## 'aggregator_stop_timeout' to 0.
#
# aggregator_stop_timeout: 2
#
# @param aggregator_buffer_size - integer - optional - default: 100
# The default buffer size for the aggregator use a sane value for most of the
# use cases, however, it could be useful to manually set it in order to trade
# RSS usage with better performances.
#
# aggregator_buffer_size: 100

## @param forwarder_timeout - integer - optional - default: 20
## Forwarder timeout in seconds
#
# forwarder_timeout: 20

## @param forwarder_retry_queue_max_size - integer - optional - default: 30
## The forwarder retries failed requests. Use this setting to change the
## maximum length of the forwarder's retry queue (each request in the queue
## takes no more than 2MB in memory)
#
# forwarder_retry_queue_max_size: 30

## @param forwarder_num_workers - integer - optional - default: 1
## The number of workers used by the forwarder.
#
# forwarder_num_workers: 1

## @param forwarder_stop_timeout - integer - optional - default: 2
## When stopping the agent, the Forwarder will try to flush all new
## transactions (not the ones in retry state).  New transactions will be created
## as the Aggregator flush it's internal data too, therefore the Agent might take
## at most 'aggregator_stop_timeout'+'forwarder_stop_timeout' seconds to exit.
##
## You can set the maximum amount of time, in seconds, allocated to the
## Forwarder to send those transactions.  You can disable this feature by setting
## 'forwarder_stop_timeout' to 0.
#
# forwarder_stop_timeout: 2

## @param cloud_provider_metadata - list of strings -  optional - default: ["aws", "gcp", "azure", "alibaba"]
## This option restricts which cloud provider endpoint will be used by the
## agent to retrieve metadata. By default the agent will try # AWS, GCP, Azure
## and alibaba providers. Some cloud provider are not enabled by default to not
## trigger security alert when querying unknown IP (for example, when enabling
## Tencent on AWS).
## Setting an empty list will disable querying any cloud metadata endpoints
## (falling back on system metadata). Disabling metadata for the cloud provider in which an Agent runs may result in
## duplicated hosts in your Datadog account and missing Autodiscovery features
##
## Possible values are:
## "aws"     AWS EC2, ECS/Fargate
## "gcp"     Google Cloud Provider
## "azure"   Azure
## "alibaba" Alibaba
## "tencent" Tencent
#
# cloud_provider_metadata:
#   - "aws"
#   - "gcp"
#   - "azure"
#   - "alibaba"

## @param collect_ec2_tags - boolean - optional - default: false
## Collect AWS EC2 custom tags as host tags.
#
# collect_ec2_tags: false

## @param ec2_metadata_timeout - integer - optional - default: 300
## Timeout in milliseconds on calls to the AWS EC2 metadata endpoints.
#
# ec2_metadata_timeout: 300

## @param collect_gce_tags - boolean - optional - default: true
## Collect Google Cloud Engine metadata as host tags
#
# collect_gce_tags: true

## @param exclude_gce_tags - list of strings - optional - default: ["kube-env", "kubelet-config", "containerd-configure-sh", "startup-script", "shutdown-script", "configure-sh", "sshKeys", "ssh-keys", "user-data", "cli-cert", "ipsec-cert", "ssl-cert", "google-container-manifest", "bosh_settings"]
## Google Cloud Engine metadata attribute to exclude from being converted into
## host tags -- only applicable when collect_gce_tags is true.
#
# exclude_gce_tags:
#   - "kube-env"
#   - "kubelet-config"
#   - "containerd-configure-sh"
#   - "startup-script"
#   - "shutdown-script"
#   - "configure-sh"
#   - "sshKeys"
#   - "ssh-keys"
#   - "user-data"
#   - "cli-cert"
#   - "ipsec-cert"
#   - "ssl-cert"
#   - "google-container-manifest"
#   - "bosh_settings"

## @param gce_metadata_timeout - integer - optional - default: 1000
## Timeout in milliseconds on calls to the GCE metadata endpoints.
#
# gce_metadata_timeout: 1000

## @param flare_stripped_keys - list of strings - optional
## By default, the Agent removes known sensitive keys from Agent and Integrations yaml configs before
## including them in the flare.
## Use this parameter to define additional sensitive keys that the Agent should scrub from
## the yaml files included in the flare.
#
# flare_stripped_keys:
#   - "sensitive_key_1"
#   - "sensitive_key_2"

{{ '{{' }} end {{ '}}' }}
{{ '{{' }}- if .Agent {{ '}}' }}
{{ '{{' }}- if .Python {{ '}}' }}
{{ '{{' }}- if .BothPythonPresent -{{ '}}' }}
## @param python_version - integer - optional - default: 2
## The major version of Python used to run integrations and custom checks.
## The only supported values are 2 (to use Python 2) or 3 (to use Python 3).
## Do not change this option when using the official Docker Agent images.
#
# python_version: 2

{{ '{{' }} end -{{ '}}' }}
{{ '{{' }} end {{ '}}' }}

############################
## Advanced Configuration ##
############################

## @param confd_path - string - optional
## The path containing check configuration files. By default, uses the conf.d folder
## located in the Agent configuration folder.
#
# confd_path: ""

## @param additional_checksd - string - optional
## Additional path indicating where to search for Python checks. By default, uses the checks.d folder
## located in the Agent configuration folder.
#
# additional_checksd: <CHECKD_FOLDER_PATH>

## @param expvar_port - integer - optional - default: 5000
## The port for the go_expvar server.
#
# expvar_port: 5000

## @param cmd_port - integer - optional - default: 5001
## The port on which the IPC api listens.
#
# cmd_port: 5001

## @param GUI_port - integer - optional
## The port for the browser GUI to be served.
## Setting 'GUI_port: -1' turns off the GUI completely
## Default is:
##  * Windows & macOS : `5002`
##  * Linux: `-1`
##
#
# GUI_port: <GUI_PORT>

## @param health_port - integer - optional - default: 0
## The Agent can expose its health check on a dedicated http port.
## This is useful for orchestrators that support http probes.
## Default is 0 (disabled), set a valid port number (eg. 5555) to enable.
#
# health_port: 0

## @param check_runners - integer - optional - default: 4
## The `check_runners` refers to the number of concurrent check runners available for check instance execution.
## The scheduler attempts to spread the instances over the collection interval and will _at most_ be
## running the number of check runners instances concurrently.
## Setting the value to 1 would result in checks running sequentially.
##
## This is a sensitive setting, and we do NOT recommend changing the default number
## of check runners in the general case. The level of concurrency has effects on
## the Agent's: RSS memory, CPU load, resource contention overhead, etc.
#
# check_runners: 4

## @param enable_metadata_collection - boolean - optional - default: true
## Metadata collection should always be enabled, except if you are running several
## agents/dsd instances per host. In that case, only one Agent should have it on.
## WARNING: disabling it on every Agent leads to display and billing issues.
#
# enable_metadata_collection: true

## @param enable_gohai - boolean - optional - default: true
## Enable the gohai collection of systems data.
#
# enable_gohai: true

## @param server_timeout - integer - optional - default: 15
## IPC api server timeout in seconds.
#
# server_timeout: 15

## @param procfs_path - string - optional
## Some environments may have the procfs file system mounted in a miscellaneous
## location. The procfs_path configuration parameter provides a mechanism to
## override the standard default location: '/proc' - this setting trickles down to
## integrations and affect their behavior if they rely on the psutil python package.
#
# procfs_path: <PROCFS_PATH>
{{ '{{' }} if .Python {{ '}}' }}
## @param disable_py3_validation - boolean - optional - default: false
## Disable Python3 validation of python checks.
#
# disable_py3_validation: false
#
## @param python3_linter_timeout - integer - optional - default: 120
## Timeout in seconds for validation of compatibility with python 3 when running python 2.
#
# python3_linter_timeout: 120

## @param memtrack_enabled - boolean - optional - default: true
## Enables tracking of memory allocations made from the python runtime loader.
#
# memtrack_enabled: true

## @param tracemalloc_debug - boolean - optional - default: false
## Enables debugging with tracemalloc for python checks.
## Please note that this option is only available when python_version is set to "3".
## Additionally when this option becomes effective the number of check runners is
## overridden to 1.
#
# tracemalloc_debug: false

## @param tracemalloc_whitelist - string - optional
## Comma-separated list of Python checks to enable tracemalloc for when `tracemalloc_debug` is true.
## By default, all Python checks are enabled.
#
# tracemalloc_whitelist: <TRACEMALLOC_WHITELIST>

## @param tracemalloc_blacklist - string - optional
## Comma-separated list of Python checks to disable tracemalloc for when `tracemalloc_debug` is true.
## By default, all Python checks are enabled. This setting takes precedence over `tracemalloc_whitelist`.
#
# tracemalloc_blacklist: <TRACEMALLOC_BLACKLIST>

## @param windows_use_pythonpath - boolean - optional
## Whether to honour the value of the PYTHONPATH env var when set on Windows.
## Disabled by default, so we only load Python libraries bundled with the Agent.
#
# windows_use_pythonpath: false
{{ '{{' }} end {{ '}}' }}
## @param secret_backend_command - string - optional
## `secret_backend_command` is the path to the script to execute to fetch secrets.
## The executable must have specific rights that differ on Windows and Linux.
##
## For more information see: https://github.com/DataDog/datadog-agent/blob/master/docs/agent/secrets.md
#
# secret_backend_command: <COMMAND_PATH>

## @param secret_backend_arguments - list of strings - optional
## If secret_backend_command is set, specify here a list of arguments to give to the command at each run.
#
# secret_backend_arguments:
#   - <ARGUMENT_1>
#   - <ARGUMENT_2>

## @param secret_backend_output_max_size - integer - optional - default: 1048576
## The size in bytes of the buffer used to store the command answer (apply to both stdout and stderr)
#
# secret_backend_output_max_size: 1048576

## @param secret_backend_timeout - integer - optional - default: 5
## The timeout to execute the command in second
#
# secret_backend_timeout: 5

## @param snmp_listener - custom object - optional
## Creates and schedules a listener to automatically discover your SNMP devices.
## Discovered devices can then be monitored with the SNMP integration by using
## the auto_conf.yaml file provided by default.
#
# snmp_listener:

  ## @param workers - integer - optional - default: 2
  ## The number of concurrent tasks used to discover SNMP devices. Increasing this value
  ## discovers devices faster but at the cost of increased resource consumption.
  #
  # workers: 2

  ## @param discovery_interval - integer - optional - default: 3600
  ## How often to discover new SNMP devices, in seconds. Decreasing this value
  ## discovers devices faster (within the limit of the time taken to scan subnets)
  ## but at the cost of increased resource consumption.
  #
  # discovery_interval: 3600

  ## @param allowed_failures - integer - optional - default: 3
  ## The number of failed requests to a given SNMP device before removing it from the list of monitored
  ## devices.
  ## If a device shuts down, the Agent stops monitoring it after `discovery_interval * allowed_failures` seconds.
  #
  # allowed_failures: 3

  ## @param configs - list - required
  ## The actual list of configurations used to discover SNMP devices in various subnets.
  ## Example:
  ## configs:
  ##  - network: 10.0.0.0/24
  ##    version: 1
  ##    community: public
  ##  - network: 10.0.1.0/28
  ##    community: public
  ##    ignored_ip_addresses:
  ##      - 10.0.1.0
  ##      - 10.0.1.1
  #
  # configs:
    ## @param network - string - required
    ## The subnet in CIDR format to scan for SNMP devices.
    ## All unignored IP addresses in the CIDR range are scanned.
    ## For optimal discovery time, be sure to use the smallest network mask
    ## possible as is appropriate for your network topology.
    ## Ex: 10.0.1.0/24
    #
    # - network: <NETWORK>

    ## @param ignored_ip_addresses - list of strings - optional
    ## A list of IP addresses to ignore when scanning the network.
    #
    # ignored_ip_addresses:
    #   - <IP_ADDRESS_1>
    #   - <IP_ADDRESS_2>

    ## @param port - integer - optional - default: 161
    ## The UDP port to use when connecting to SNMP devices.
    #
    # port: 161

    ## @param version - integer - optional - default: <BEST_GUESS>
    ## Set the version of the SNMP protocol. Available options are: `1`, `2` or `3`.
    ## If unset, the Agent tries to guess the correct version based on other configuration
    ## parameters, for example: if `user` is set, the Agent uses SNMP v3.
    #
    # version: <VERSION>

    ## @param timeout - integer - optional - default: 5
    ## The number of seconds before timing out.
    #
    # timeout: 5

    ## @param retries - integer - optional - default: 3
    ## The number of retries before failure.
    #
    # retries: 3

    ## @param community - string - optional
    ## Required for SNMP v1 & v2.
    ## Ex: 'public'
    #
    # community: <COMMUNITY>

    ## @param user - string - optional
    ## The username to connect to your SNMP devices.
    ## SNMPv3 only.
    #
    # user: <USERNAME>

    ## @param authentication_key - string - optional
    ## The passphrase to use with your Authentication type.
    ## SNMPv3 only.
    #
    # authentication_key: <AUTHENTICATION_KEY>

    ## @param authentication_protocol - string - optional
    ## The authentication protocol to use when connecting to your SNMP devices.
    ## Available options are: MD5, SHA.
    ## Defaults to MD5 when `authentication_key` is specified.
    ## SNMPv3 only.
    #
    # authentication_protocol: <AUTHENTICATION_PROTOCOL>

    ## @param privacy_key - string - optional
    ## The passphrase to use with your privacy protocol.
    ## SNMPv3 only.
    #
    # privacy_key: <PRIVACY_KEY>

    ## @param privacy_protocol - string - optional
    ## The privacy protocol to use when connecting to your SNMP devices.
    ## Available options are: DES, 3DES, AES, AES192, AES256, AES192C, AES256C.
    ## Defaults to DES when `privacy_key` is specified.
    ## SNMPv3 only.
    #
    # privacy_protocol: <PRIVACY_PROTOCOL>

    ## @param context_name - string - optional
    ## The name of your context (optional SNMP v3-only parameter).
    #
    # context_name: <CONTEXT_NAME>

    ## @param ad_identifier - string - optional - default: snmp
    ## A unique identifier to attach to devices from that subnetwork.
    ## When configuring the SNMP integration in snmp.d/auto_conf.yaml,
    ## specify the corresponding ad_identifier at the top of the file.
    #
    # ad_identifier: snmp

{{ '{{' }}- if .Profiling -{{ '}}' }}
## @param profiling - custom object - optional
## Enter specific configurations for profiling.
## Uncomment this parameter and the one below to enable profiling.
## See https://docs.datadoghq.com/tracing/profiling/
#
## NOTE: If enabled this option may incur in billing charges or other
##       unexpected side-effects (ie. agent profiles showing with your
##       services).
#
# profiling:
#
  ## @param enabled - boolean - optional - default: false
  ## Enable profiling for the Agent process.
  #
  # enabled: false

{{ '{{' }} end {{ '}}' }}
{{ '{{' }} end -{{ '}}' }}

{{ '{{' }}- if .LogsAgent {{ '}}' }}

##################################
## Log collection Configuration ##
##################################

## @param logs_enabled - boolean - optional - default: false
## Enable Datadog Agent log collection by setting logs_enabled to true.
#
# logs_enabled: false

## @param logs_config - custom object - optional
## Enter specific configurations for your Log collection.
## Uncomment this parameter and the one below to enable them.
## See https://docs.datadoghq.com/agent/logs/
#
# logs_config:

  ## @param container_collect_all - boolean - optional - default: false
  ## Enable container log collection for all the containers (see ac_exclude to filter out containers)
  #
  # container_collect_all: false

  ## @param logs_dd_url - string - optional
  ## Define the endpoint and port to hit when using a proxy for logs. The logs are forwarded in TCP
  ## therefore the proxy must be able to handle TCP connections.
  #
  # logs_dd_url: <ENDPOINT>:<PORT>

  ## @param logs_no_ssl - boolean - optional - default: false
  ## Disable the SSL encryption. This parameter should only be used when logs are
  ## forwarded locally to a proxy. It is highly recommended to then handle the SSL encryption
  ## on the proxy side.
  #
  # logs_no_ssl: false

  ## @param processing_rules - list of custom objects - optional
  ## Global processing rules that are applied to all logs. The available rules are
  ## "exclude_at_match", "include_at_match" and "mask_sequences". More information in Datadog documentation:
  ## https://docs.datadoghq.com/agent/logs/advanced_log_collection/#global-processing-rules
  #
  # processing_rules:
  #   - type: <RULE_TYPE>
  #     name: <RULE_NAME>
  #     pattern: <RULE_PATTERN>

  ## @param use_http - boolean - optional - default: false
  ## By default, logs are sent through TCP, use this parameter
  ## to send logs in HTTPS batches to port 443
  #
  # use_http: true

  ## @param use_tcp - boolean - optional - default: false
  ## By default, logs are sent through HTTP if possible, use this parameter
  ## to send logs in TCP
  #
  # use_tcp: true

  ## @param use_compression - boolean - optional - default: false
  ## This parameter is available when sending logs with HTTPS. If enabled, the Agent
  ## compresses logs before sending them.
  #
  # use_compression: true

  ## @param compression_level - integer - optional - default: 6
  ## The compression_level parameter accepts values from 0 (no compression)
  ## to 9 (maximum compression but higher resource usage).
  #
  # compression_level: 6

{{ '{{' }} end -{{ '}}' }}
{{ '{{' }}- if .TraceAgent {{ '}}' }}

####################################
## Trace Collection Configuration ##
####################################

## @param apm_config - custom object - optional
## Enter specific configurations for your trace collection.
## Uncomment this parameter and the one below to enable them.
## See https://docs.datadoghq.com/agent/apm/
#
# apm_config:

  ## @param enabled - boolean - optional - default: true
  ## Set to true to enable the APM Agent.
  #
  # enabled: true

  ## @param env - string - optional - default: none
  ## The environment tag that Traces should be tagged with.
  ## If not set the value will be inherited, in order, from the top level
  ## "env" config option if set and then from the 'env:' tag if present in the
  ## 'tags' top level config option.
  #
  # env: none

  ## @param receiver_port - integer - optional - default: 8126
  ## The port that the trace receiver should listen on.
  #
  # receiver_port: 8126

  ## @param receiver_socket - string - optional
  ## Accept traces through Unix Domain Sockets.
  ## It is off by default. When set, it must point to a valid socket file.
  #
  # receiver_socket: <UNIX_SOCKET_PATH>

  ## @param apm_non_local_traffic - boolean - optional - default: false
  ## Set to true so the Trace Agent listens for non local traffic,
  ## i.e if Traces are being sent to this Agent from another host/container
  #
  # apm_non_local_traffic: false

  ## @param apm_dd_url - string - optional
  ## Define the endpoint and port to hit when using a proxy for APM. The traces are forwarded in TCP
  ## therefore the proxy must be able to handle TCP connections.
  #
  # apm_dd_url: <ENDPOINT>:<PORT>

  ## @param extra_sample_rate - float - optional - default: 1.0
  ## Extra global sample rate to apply on all the traces
  ## This sample rate is combined to the sample rate from the sampler logic, still promoting interesting traces.
  ## From 1 (no extra rate) to 0 (don't sample at all)
  #
  # extra_sample_rate: 1.0

  ## @param max_traces_per_second - integer - optional - default: 10
  ## Maximum number of traces per second to sample. The limit is applied over an average over
  ## a few minutes ; much bigger spikes are possible. Set to 0 to disable the limit.
  #
  # max_traces_per_second: 10

  ## @param max_events_per_second - integer - optional - default: 200
  ## Maximum number of APM events per second to sample.
  #
  # max_events_per_second: 200

  ## @param max_memory - integer - optional - default: 500000000
  ## This value is what the Agent aims to use in terms of memory. If surpassed, the API
  ## rate limits incoming requests to aim and stay below this value.
  ## Note: The Agent process is killed if it uses more than 150% of `max_memory`.
  ## Set the `max_memory` parameter to `0` to disable the memory limitation.
  #
  # max_memory: 500000000

  ## @param max_cpu_percent - integer - optional - default: 50
  ## The CPU percentage that the Agent aims to use. If surpassed, the API rate limits
  ## incoming requests to aim and stay below this value. Examples: 50 = half a core, 200 = two cores.
  ## Set `max_cpu_percent` to `0` to disable rate limiting based on CPU usage.
  #
  # max_cpu_percent: 50

  ## @param obfuscation - object - optional
  ## Defines obfuscation rules for sensitive data. Disabled by default.
  ## See https://docs.datadoghq.com/tracing/guide/agent-obfuscation
  #
  # obfuscation:
  #     <OBFUSCATION_CONFIGURATION>

  ## @param replace_tags - list of objects - optional
  ## Defines a set of rules to replace or remove certain services, resources, tags containing
  ## potentially sensitive information.
  ## Each rules has to contain:
  ##  * name - string - The tag name to replace, for services or resources use "service.name" or "resource.name".
  ##  * pattern - string - The pattern to match the desired content to replace
  ##  * repl - string - what to inline if the pattern is matched
  ##
  ## See https://docs.datadoghq.com/tracing/guide/security/#replace-rules
  ##
  #
  # replace_tags:
  #   - name: "<TAG_NAME>"
  #     pattern: "<REGEX_PATTERN>"
  #     repl: "<PATTERN_TO_INLINE>"

  ## @param ignore_resources - list of strings - optional
  ## A blacklist of regular expressions can be provided to disable certain traces based on their resource name
  ## all entries must be surrounded by double quotes and separated by commas.
  #
  # ignore_resources: ["(GET|POST) /healthcheck"]

  ## @param log_file - string - optional
  ## The full path to the file where APM-agent logs are written.
  #
  # log_file: <APM_LOG_FILE_PATH>

  ## @param log_throttling - boolean - default: true
  ## Limits the total number of warnings and errors to 10 for every 10 second interval.
  #
  # log_throttling: true

{{ '{{' }} end -{{ '}}' }}
{{ '{{' }}- if .ProcessAgent {{ '}}' }}

######################################
## Process Collection Configuration ##
######################################

## @param process_config - custom object - optional
## Enter specific configurations for your Process data collection.
## Uncomment this parameter and the one below to enable them.
## See https://docs.datadoghq.com/graphing/infrastructure/process/
#
# process_config:

  ## @param enabled - string - optional - default: "false"
  ##  A string indicating the enabled state of the Process Agent:
  ##    * "false"    : The Agent collects only containers information.
  ##    * "true"     : The Agent collects containers and processes information.
  ##    * "disabled" : The Agent process collection is disabled.
  #
  # enabled: "true"

  ## @param expvar_port - string - optional - default: 6062
  ## Port for the debug endpoints for the process Agent.
  #
  # expvar_port: 6062

  ## @param log_file - string - optional
  ## The full path to the file where process Agent logs are written.
  #
  # log_file: <PROCESS_LOG_FILE_PATH>

  ## @param intervals - custom object - optional - default: 10s for normal checks and 2s for others.
  ## The interval, in seconds, at which the Agent runs each check. If you want consistent
  ## behavior between real-time, set the `container_realtime` and `process_realtime` intervals to 10.
  #
  # intervals:
  #   container: 10
  #   container_realtime: 2
  #   process: 10
  #   process_realtime: 2

  ## @param blacklist_patterns - list of strings - optional
  ## A list of regex patterns that exclude processes if matched.
  #
  # blacklist_patterns:
  #   - <REGEX>

  ## @param queue_size - integer - optional - default: 20
  ## How many check results to buffer in memory when POST fails.
  #
  # queue_size: 20

  ## @param max_per_message - integer - optional - default: 100
  ## The maximum number of processes or containers per message.
  #
  # max_per_message: 100

  ## @param dd_agent_bin - string - optional
  ## Overrides the path to the Agent bin used for getting the hostname. Defaults are:
  ##   * Windows: <AGENT_DIRECTORY>\embedded\\agent.exe
  ##   * Unix: /opt/datadog-agent/bin/agent/agent
  #
  # dd_agent_bin: <AGENT_BIN_PATH>

  ## @param dd_agent_env - string - optional - default: ""
  ## Overrides of the environment we pass to fetch the hostname.
  #
  # dd_agent_env: ""

  ## @param scrub_args - boolean - optional - default: true
  ## Hide sensitive data on the Live Processes page.
  #
  # scrub_args: true

  ## @param custom_sensitive_words - list of strings - optional
  ## Define your own list of sensitive data to be merged with the default one.
  ## Read more on Datadog documentation:
  ## https://docs.datadoghq.com/graphing/infrastructure/process/#process-arguments-scrubbing
  #
  # custom_sensitive_words:
  #   - 'personal_key'
  #   - '*token'
  #   - 'sql*'
  #   - '*pass*d*'

{{ '{{' }} end -{{ '}}' }}
{{ '{{' }}- if .Compliance {{ '}}' }}
#############################################
## Security Agent Compliance Configuration ##
#############################################
## @param compliance_config - custom object - optional
## Enter specific configuration for continuous compliance checks.
# compliance_config:

  ## @param enabled - boolean - optional - default: false
  ## Set to true to enable continuous compliance checks
  #
  # enabled: false

  ## @param dir - string - optional - default: /etc/datadog-agent/compliance.d
  ## Directory path for compliance checks configuration containing enabled benchmarks
  #
  # dir: /etc/datadog-agent/compliance.d

  ## @param check_interval - duration - optional - default: 20m
  ## Check interval (see  https://golang.org/pkg/time/#ParseDuration for available options)
  # check_interval: 20m
{{ '{{' }} end -{{ '}}' }}
{{ '{{' }}- if .SystemProbe {{ '}}' }}

##################################
## System Probe Configuration ##
##################################

## @param system_probe_config - custom object - optional
## Beta Agent
## Enter specific configurations for your System Probe data collection.
## Uncomment this parameter and the one below to enable them.
#
# system_probe_config:

  ## @param enabled - boolean - optional - default: false
  ## Set to true to enable the System Probe.
  #
  # enabled: false

  ## @param sysprobe_socket - string - optional - default: /opt/datadog-agent/run/sysprobe.sock
  ## The full path to the location of the unix socket where system probes are accessed.
  #
  # sysprobe_socket: /opt/datadog-agent/run/sysprobe.sock

  ## @param log_file - string - optional - default: /var/log/datadog/system-probe.log
  ## The full path to the file where system-probe logs are written.
  #
  # log_file: /var/log/datadog/system-probe.log

{{ '{{' }}- if .SecurityModule {{ '}}' }}

##########################################
## Security Agent Runtime Configuration ##
##                                      ##
## Settings to sent logs to DataDog are ##
## fetched from section `logs_config`   ##
##########################################

# runtime_security_config:
  ## @param enabled - boolean - optional - default: false
  ## Set to true to enable the Security Runtime Module.
  #
  # enabled: false

  ## @param debug - boolean - optional - default: false
  ## Enable debug mode.
  #
  # debug: false

  ## @param socket - string - optional - default: /opt/datadog-agent/run/runtime-security.sock
  ## The full path to the location of the unix socket where security runtime module is accessed.
  #
  # socket: /opt/datadog-agent/run/runtime-security.sock

  ## @param policies - custom object - optional
  ## Policy files
  # policies:

    ## @param dir - string - default: /etc/datadog-agent/runtime-security.d
    ## Path from where the policy files will be loaded
    #
    # dir: /etc/datadog-agent/runtime-security.d

  ## @param enable_kernel_filters - boolean - optional - default: true
  ## Enable filtering events from the kernel
  #
  # enable_kernel_filters: true

  ## @param syscall_monitor - custom object - optional
  ## Syscall monitoring
  #
  # syscall_monitor:

    ## @param enabled - boolean - optional - default: false
    ## Set to true to enable the Syscall monitoring.
    #
    #  enabled: false
{{ '{{' }} end -{{ '}}' }}
{{ '{{' }} end -{{ '}}' }}
{{ '{{' }}- if .Dogstatsd {{ '}}' }}

#############################
## DogStatsD Configuration ##
#############################

## @param use_dogstatsd - boolean - optional - default: true
## Set this option to false to disable the Agent DogStatsD server.
#
# use_dogstatsd: true

## @param dogstatsd_port - integer - optional - default: 8125
## Override the Agent DogStatsD port.
## Note: Make sure your client is sending to the same UDP port.
#
# dogstatsd_port: 8125

## @param bind_host - string - optional - default: localhost
## The host to listen on for Dogstatsd and traces. This is ignored by APM when
## `apm_config.non_local_traffic` is enabled and ignored by DogStatsD when `dogstatsd_non_local_traffic`
## is enabled. The trace-agent uses this host to send metrics to.
## The `localhost` default value is invalid in IPv6 environments where dogstatsd listens on "::1".
## To solve this problem, ensure Dogstatsd is listening on IPv4 by setting this value to "127.0.0.1".
#
# bind_host: localhost

## @param dogstatsd_socket - string - optional - default: ""
## Listen for Dogstatsd metrics on a Unix Socket (*nix only). Set to a valid filesystem path to enable.
#
# dogstatsd_socket: ""

## @param dogstatsd_origin_detection - boolean - optional - default: false
## When using Unix Socket, DogStatsD can tag metrics with container metadata.
## If running DogStatsD in a container, host PID mode (e.g. with --pid=host) is required.
#
# dogstatsd_origin_detection: false

## @param dogstatsd_buffer_size - integer - optional - default: 8192
## The buffer size use to receive statsd packets, in bytes.
#
# dogstatsd_buffer_size: 8192

## @param dogstatsd_non_local_traffic - boolean - optional - default: false
## Set to true to make DogStatsD listen to non local UDP traffic.
#
# dogstatsd_non_local_traffic: false

## @param dogstatsd_stats_enable - boolean - optional - default: false
## Publish DogStatsD's internal stats as Go expvars.
#
# dogstatsd_stats_enable: false

## @param dogstatsd_queue_size - integer - optional - default: 1024
## Configure the internal queue size of the Dogstatsd server.
## Reducing the size of this queue will reduce the maximum memory usage of the
## Dogstatsd server but as a trade-off, it could increase the number of packet drops.
#
# dogstatsd_queue_size: 1024

## @param dogstatsd_stats_buffer - integer - optional - default: 10
## Set how many items should be in the DogStatsD's stats circular buffer.
#
# dogstatsd_stats_buffer: 10

## @param dogstatsd_stats_port - integer - optional - default: 5000
## The port for the go_expvar server.
#
# dogstatsd_stats_port: 5000

## @param dogstatsd_so_rcvbuf - integer - optional - default: 0
## The number of bytes allocated to DogStatsD's socket receive buffer (POSIX system only).
## By default, the system sets this value. If you need to increase the size of this buffer
## but keep the OS default value the same, you can set DogStatsD's receive buffer size here.
## The maximum accepted value might change depending on the OS.
#
# dogstatsd_so_rcvbuf: 0

## @param dogstatsd_metrics_stats_enable - boolean - optional - default: false
## Set this parameter to true to have DogStatsD collects basic statistics (count/last seen)
## about the metrics it processsed. Use the Agent command "dogstatsd-stats" to visualize
## those statistics.
#
# dogstatsd_metrics_stats_enable: false

## @param dogstatsd_tags - list of key:value elements - optional
## Additional tags to append to all metrics, events and service checks received by
## this DogStatsD server.
#
# dogstatsd_tags:
#   - <TAG_KEY>:<TAG_VALUE>

## @param dogstatsd_mapper_profiles - list of custom object - optional
## The profiles will be used to convert parts of metrics names into tags.
## If a profile prefix is matched, other profiles won't be tried even if that profile matching rules doesn't match.
## The profiles and matching rules are processed in the order defined in this configuration.
##
## For each profile, following fields are available:
##    name (required): profile name
##    prefix (required): mapping only applies to metrics with the prefix. If set to `*`, it will match everything.
##    mappings: mapping rules, see below.
## For each mapping, following fields are available:
##    match (required): pattern for matching the incoming metric name e.g. `test.job.duration.*`
##    match_type (optional): pattern type can be `wildcard` (default) or `regex` e.g. `test\.job\.(\w+)\.(.*)`
##    name (required): the metric name the metric should be mapped to e.g. `test.job.duration`
##    tags (optional): list of key:value pair of tag key and tag value
##      The value can use $1, $2, etc, that will be replaced by the corresponding element capture by `match` pattern
##      This alternative syntax can also be used: ${1}, ${2}, etc
#
# dogstatsd_mapper_profiles:
#   - name: <PROFILE_NAME>                        # e.g. "airflow", "consul", "some_database"
#     prefix: <PROFILE_PREFIX>                    # e.g. "airflow.", "consul.", "some_database."
#     mappings:
#       - match: <METRIC_TO_MATCH>                # e.g. `test.job.duration.*` to match `test.job.duration.my_job_name`
#         match_type: <MATCH_TYPE>                # e.g. `wildcard` or `regex`
#         name: <MAPPED_METRIC_NAME>              # e.g. `test.job.duration`
#         tags:
#           <TAG_KEY>: <TAG_VALUE_TO_EXPAND>      # e.g. `job_name: "$1"`, $1 is replaced by value capture by *
#       - match: 'test.worker.*.*.start_time'     # to match `test.worker.<worker_type>.<worker_name>.start_time`
#         name: 'test.worker.start_time'
#         tags:
#           worker_type: '$1'
#           worker_name: '$2'
#       - match: 'test\.task\.duration\.(\w+)\.(.*)'     # no need to escape in yaml context using single quote
#         match_type: regex
#         name: 'test.task'
#         tags:
#           task_type: '$1'
#           task_name: '$2'

## @param dogstatsd_mapper_cache_size - integer - optional - default: 1000
## Size of the cache (max number of mapping results) used by Dogstatsd mapping feature.
#
# dogstatsd_mapper_cache_size: 1000

## @param dogstatsd_entity_id_precedence - boolean - optional - default: false
## Disable enriching Dogstatsd metrics with tags from "origin detection" when Entity-ID is set.
#
# dogstatsd_entity_id_precedence: false

## @param statsd_forward_host - string - optional - default: ""
## Forward every packet received by the DogStatsD server to another statsd server.
## WARNING: Make sure that forwarded packets are regular statsd packets and not "DogStatsD" packets,
## as your other statsd server might not be able to handle them.
#
# statsd_forward_host: ""

## @param statsd_forward_port - integer - optional - default: 0
## Port or the "statsd_forward_host" to forward StatsD packet to.
#
# statsd_forward_port: 0

## @param statsd_metric_namespace - string - optional - default: ""
## Set a namespace for all StatsD metrics coming from this host.
## Each metric received is prefixed with the namespace before it's sent to Datadog.
#
# statsd_metric_namespace: ""

{{ '{{' }} end -{{ '}}' }}
{{ '{{' }}- if .Metadata {{ '}}' }}

## @param metadata_providers - list of custom object - optional
## Metadata providers, add or remove from the list to enable or disable collection.
## Intervals are expressed in seconds. You can also set a provider's interval to 0
## to disable it.
#
# metadata_providers:
#   - name: k8s
#     interval: 60

{{ '{{' }} end -{{ '}}' }}
{{ '{{' }}- if .JMX {{ '}}' }}

#######################
## JMX Configuration ##
#######################

## @param jmx_custom_jars - list of strings - optional
## If you only run Autodiscovery tests, jmxfetch might fail to pick up custom_jar_paths
## set in the check templates. If that is the case, force custom jars here.
#
# jmx_custom_jars:
#   - /jmx-jars/jboss-cli-client.jar

## @param jmx_use_cgroup_memory_limit - boolean - optional - default: false
## When running in a memory cgroup, openjdk 8u131 and higher can automatically adjust
## its heap memory usage in accordance to the cgroup/container's memory limit.
## The Agent set a Xmx of 200MB if none is configured.
## Note: OpenJDK version < 8u131 or >= 10 as well as other JVMs might fail
## to start if this option is set.
#
# jmx_use_cgroup_memory_limit: false

## @param jmx_use_container_support - boolean - optional - default: false
## When running in a container, openjdk 10 and higher can automatically detect
## container specific configuration instead of querying the operating system
## to adjust resources allotted to the JVM.
## Note: openjdk versions prior to 10 and other JVMs might fail to start if
## this option is set.
#
# jmx_use_container_support: false

## @param jmx_max_restarts - integer - optional - default: 3
## Number of JMX restarts allowed in the restart-interval before giving up.
#
# jmx_max_restarts: 3

## @param jmx_restart_interval - integer - optional - default: 5
## Duration of the restart interval in seconds.
#
# jmx_restart_interval: 5

## @param jmx_check_period - integer - optional - default: 15000
## Duration of the period for check collections in milliseconds.
#
# jmx_check_period: 15000

## @param jmx_thread_pool_size - integer - optional - default: 3
## JMXFetch collects multiples instances concurrently. Defines the maximum level of concurrency:
##   * Higher concurrency increases CPU utilization during metric collection.
##   * Lower concurrency results in lower CPU usage but may increase the total collection time.
## A value of 1 processes instances serially.
#
# jmx_thread_pool_size: 3

## @param jmx_collection_timeout - integer - optional - default: 60
## Defines the maximum waiting period in seconds before timing up on metric collection.
#
# jmx_collection_timeout: 60

## @param jmx_reconnection_thread_pool_size - integer - optional - default: 3
## JMXFetch reconnects to multiples instances concurrently. Defines the maximum level of concurrency:
##   * Higher concurrency increases CPU utilization during reconnection.
##   * Lower concurrency results in lower CPU usage but may increase the total reconnection time
## A value of 1 processes instance reconnections serially.
#
# jmx_reconnection_thread_pool_size: 3

## @param jmx_reconnection_timeout - integer - optional - default: 10
## Determines the maximum waiting period in seconds before timing up on instance reconnection.
#
# jmx_reconnection_timeout: 10

{{ '{{' }} end -{{ '}}' }}
{{ '{{' }}- if .Logging {{ '}}' }}

###########################
## Logging Configuration ##
###########################

## @param log_level - string - optional - default: info
## Minimum log level of the Datadog Agent.
## Valid log levels are: trace, debug, info, warn, error, critical, and off.
## Note: When using the 'off' log level, quotes are mandatory.
#
# log_level: 'info'

## @param log_file - string - optional
## Path of the log file for the Datadog Agent.
## See https://docs.datadoghq.com/agent/guide/agent-log-files/
#
# log_file: <AGENT_LOG_FILE_PATH>

## @param log_format_json - boolean - optional - default: false
## Set to 'true' to output Agent logs in JSON format.
#
# log_format_json: false

## @param log_to_console - boolean - optional - default: true
## Set to 'false' to disable Agent logging to stdout.
#
# log_to_console: true

## @param disable_file_logging - boolean - optional - default: false
## Set to 'true' to disable logging to the log file.
#
# disable_file_logging: false

## @param log_file_max_size - custom - optional - default: 10MB
## Maximum size of one log file. Use either a size (e.g. 10MB) or
## provide value in bytes: 10485760
#
# log_file_max_size: 10MB

## @param log_file_max_rolls - integer - optional - default: 1
## Maximum amount of "old" log files to keep.
## Set to 0 to not limit the number of files to create.
#
# log_file_max_rolls: 1

## @param log_to_syslog - boolean - optional - default: false
## Set to 'true' to enable logging to syslog.
## Note: Even if this option is set to 'false', the service launcher of your environment
## may redirect the Agent process' stdout/stderr to syslog. In that case, if you wish
## to disable logging to syslog entirely, set 'log_to_console' to 'false' as well.
#
# log_to_syslog: false

## @param syslog_uri - string - optional
## Define a custom remote syslog uri if needed. If 'syslog_uri' is left undefined/empty,
## a local domain socket connection is attempted.
#
# syslog_uri: <SYSLOG_URI>

## @param syslog_rfc - boolean - optional - default: false
## Set to 'true' to output in an RFC 5424-compliant format for Agent logs.
#
# syslog_rfc: false

## @param syslog_pem - string - optional
## If TLS enabled, you must specify a path to a PEM certificate here.
#
# syslog_pem: <PEM_CERTIFICATE_PATH>

## @param syslog_key - string - optional
## If TLS enabled, you must specify a path to a private key here.
#
# syslog_key: <PEM_KEY_PATH>

## @param syslog_tls_verify - boolean - optional - default: true
## If TLS enabled, you may enforce TLS verification here.
#
# syslog_tls_verify: true

## @param log_format_rfc3339 - boolean - optional - default false
## If enabled the Agent will log using the RFC3339 format for the log time.
#
# log_format_rfc3339: false

{{ '{{' }} end -{{ '}}' }}
{{ '{{' }}- if .Autoconfig {{ '}}' }}

##############################
## Autoconfig Configuration ##
##############################

## @param autoconf_template_dir - string - optional - default: /datadog/check_configs
## Directory containing configuration templates for Autoconfig.
#
# autoconf_template_dir: /datadog/check_configs

## @param config_providers - List of custom object - optional
## The providers the Agent should call to collect checks configurations. Available providers are:
##   * kubelet - The kubelet provider handles templates embedded in pod annotations.
##   * docker -  The Docker provider handles templates embedded in container labels.
##   * clusterchecks - The clustercheck provider retrieves cluster-level check configurations from the cluster-agent.
##   * kube_services - The kube_services provider watches Kubernetes services for cluster-checks
##
## See https://docs.datadoghq.com/guides/autodiscovery/ to learn more
#
# config_providers:
#  - name: kubelet
#    polling: true
#  - name: docker
#    polling: true
#  - name: clusterchecks
#    grace_time_seconds: 60
{{ '{{' }} if .ClusterChecks {{ '}}' }}
#  - name: kube_services
#    polling: true
{{ '{{' }} end -{{ '}}' }}
#  - name: etcd
#    polling: true
#    template_dir: /datadog/check_configs
#    template_url: http://127.0.0.1
#    username:
#    password:
#  - name: consul
#    polling: true
#    template_dir: datadog/check_configs
#    template_url: http://127.0.0.1
#    ca_file:
#    ca_path:
#    cert_file:
#    key_file:
#    username:
#    password:
#    token:
#  - name: zookeeper
#    polling: true
#    template_dir: /datadog/check_configs
#    template_url: 127.0.0.1
#    username:
#    password:

## @param extra_config_providers - list of strings - optional
## Add additional config providers by name using their default settings, and pooling enabled.
## This list is available as an environment variable binding.
#
# extra_config_providers:
#   - clusterchecks

{{ '{{' }} end -{{ '}}' }}
{{ '{{' }}- if .Autodiscovery {{ '}}' }}

###########################################
## Container Autodiscovery Configuration ##
###########################################

## @param container_cgroup_root - string - optional - default: /host/sys/fs/cgroup/
## Change the root directory to look at to get cgroup statistics.
## Default if environment variable "DOCKER_DD_AGENT" is set to "/host/sys/fs/cgroup"
## and "/sys/fs/cgroup" if not.
#
# container_cgroup_root: /host/sys/fs/cgroup/

## @param container_proc_root - string - optional - default: /host/proc
## Change the root directory to look at to get proc statistics.
## Default if environment variable "DOCKER_DD_AGENT" is set "/host/proc" and "/proc" if not.
#
# container_proc_root: /host/proc

## @param listeners - list of key:value elements - optional
## Choose "auto" if you want to let the Agent find any relevant listener on your host
## At the moment, the only auto listener supported is Docker
## If you have already set Docker anywhere in the listeners, the auto listener is ignored
#
# listeners:
#   - name: auto
#   - name: docker

## @param extra_listeners - list of strings - optional
## You can also add additional listeners by name using their default settings.
## This list is available as an environment variable binding.
#
# extra_listeners:
#   - kubelet

## @param ac_exclude - list of comma separated strings - optional
## Exclude containers from metrics and AD based on their name or image.
## If a container matches an exclude rule, it won't be included unless it first matches an include rule.
## An excluded container won't get any individual container metric reported for it.
## See: https://docs.datadoghq.com/agent/autodiscovery/#include-or-exclude-containers
#
# ac_exclude: []

## @param ac_include - list of comma separated strings - optional
## Include containers from metrics and AD based on their name or image:
## See: https://docs.datadoghq.com/agent/autodiscovery/#include-or-exclude-containers
#
# ac_include: []

## @param exclude_pause_container - boolean - optional - default: true
## Exclude default pause containers from orchestrators.
## By default the Agent doesn't monitor kubernetes/openshift pause container.
## They are still counted in the container count (just like excluded containers).
#
# exclude_pause_container: true

## @param docker_query_timeout - integer - optional - default: 5
## Set the default timeout value when connecting to the Docker daemon.
#
# docker_query_timeout: 5

## @param ad_config_poll_interval - integer - optional - default: 10
## The default interval in second to check for new autodiscovery configurations
## on all registered configuration providers.
#
# ad_config_poll_interval: 10

## @param cloud_foundry_garden - custom object - optional
## Settings for Cloudfoundry application container autodiscovery.
#
# cloud_foundry_garden:

  ## @param listen_network - string - optional - default: unix
  ## The network on which the garden API is listening. Possible values are `unix` or `tcp`
  #
  # listen_network: unix

  ## @param listen_address - string - optional - default: /var/vcap/data/garden/garden.sock
  ## The address on which the garden API is listening.
  #
  # listen_address: /var/vcap/data/garden/garden.sock

{{ '{{' }} end -{{ '}}' }}
{{ '{{' }}- if .ClusterChecks {{ '}}' }}

#################################
## Cluster check Configuration ##
#################################

## @param cluster_checks - custom object - optional
## Enter specific configurations for your cluster check.
## The cluster-agent is able to autodiscover cluster resources and dispatch checks on
## the node-agents (provided the clustercheck config provider is enabled on them).
## Uncomment this parameter and the one below to enable them.
## See https://docs.datadoghq.com/agent/kubernetes/cluster/
#
# cluster_checks:

  ## @param enabled - boolean - optional - default: false
  ## Set to true to enable the dispatching logic on the leader cluster-agent.
  #
  # enabled: false

  ## @param node_expiration_timeout - integer - optional - default: 30
  ## Set "node_expiration_timeout" time in second after which Node-agents that have not
  ## queried the cluster-agent are deleted, and their checks re-dispatched to other nodes.
  #
  # node_expiration_timeout: 30

  ## @param warmup_duration - integer - optional - default: 30
  ## Set the "warmup_duration" duration in second for the cluster-agent to wait for all
  ## node-agents to report to it before dispatching configurations.
  #
  # warmup_duration: 30

  ## @param cluster_tag_name - string - optional - default: cluster_name
  ## If a cluster_name value is set or autodetected, a "<CLUSTER_NAME>" tag is added
  ## to all cluster-check configurations sent to the node-agents.
  ## Set a custom tag name here, or disable it by setting an empty name.
  #
  # cluster_tag_name: cluster_name

  ## @param extra_tags - list of key:value elements - optional
  ## Set a list of additionnal tags can to be added to every cluster-check configuration.
  #
  # extra_tags:
  #   - <TAG_KEY>:<TAG_VALUE>

  ## @param advanced_dispatching_enabled - boolean - optional - default: false
  ## If advanced_dispatching_enabled is true the leader cluster-agent collects stats
  ## from the cluster level check runners to optimize the check dispatching logic.
  #
  # advanced_dispatching_enabled: false

  ## @param clc_runners_port - integer - optional - default: 5005
  ## Set the "clc_runners_port" used by the cluster-agent client to reach cluster level
  ## check runners and collect their stats.
  #
  # clc_runners_port: 5005

{{ '{{' }} end -{{ '}}' }}
{{ '{{' }}- if .DockerTagging {{ '}}' }}

#########################
## Container detection ##
#########################

## @param container_cgroup_prefix - string - optional - default: /docker/
## On hosts with mixed workloads, non-containernized processes can
## mistakenly be detected as containerized. Use this parameter to
## tune the detection logic to your system and avoid false-positives.
#
# container_cgroup_prefix: "/docker/"

###########################
## Docker tag extraction ##
###########################

## @param docker_labels_as_tags - map - optional
## The Agent can extract container label values and set them as metric tags values associated to a <TAG_KEY>.
## If you prefix your tag name with `+`, it will only be added to high cardinality metrics (Docker check).
#
# docker_labels_as_tags:
#   <LABEL_NAME>: <TAG_KEY>
#   <HIGH_CARDINALITY_LABEL_NAME>: +<TAG_KEY>

## @param docker_env_as_tags - map - optional
## The Agent can extract environment variables values and set them as metric tags values associated to a <TAG_KEY>.
## If you prefix your tag name with `+`, it will only be added to high cardinality metrics (Docker check).
#
# docker_env_as_tags:
#   <ENVVAR_NAME>: <TAG_KEY>

{{ '{{' }} end -{{ '}}' }}
{{ '{{' }}- if .KubernetesTagging {{ '}}' }}

###############################
## Kubernetes tag extraction ##
###############################

## @param kubernetes_pod_labels_as_tags - map - optional
## The Agent can extract pod labels values and set them as metric tags values associated to a <TAG_KEY>.
## If you prefix your tag name with +, it will only be added to high cardinality metrics.
#
# kubernetes_pod_labels_as_tags:
#   <POD_LABEL>: <TAG_KEY>
#   <HIGH_CARDINALITY_LABEL_NAME>: +<TAG_KEY>

## @param kubernetes_pod_annotations_as_tags - map - optional
## The Agent can extract annotations values and set them as metric tags values associated to a <TAG_KEY>.
## If you prefix your tag name with +, it will only be added to high cardinality metrics.
#
# kubernetes_pod_annotations_as_tags:
#   <ANNOTATION>: <TAG_KEY>
#   <HIGH_CARDINALITY_ANNOTATION>: +<TAG_KEY>

{{ '{{' }} end -{{ '}}' }}
{{ '{{' }}- if .ECS {{ '}}' }}

###################################
## ECS integration Configuration ##
###################################

## @param ecs_agent_container_name - string - optional - default: ecs-agent
## The ECS Agent container should be autodetected when running with the
## default (ecs-agent) name. If not, change the container name here:
#
# ecs_agent_container_name: ecs-agent

## @param ecs_agent_url - string - optional - default: http://localhost:51678
## The ECS Agent container should be autodetected when running with the
## default (ecs-agent) name. If not, change the container name the
## Agent should look for with ecs_agent_container_name, or force a fixed url here:
#
# ecs_agent_url: http://localhost:51678

## @param ecs_collect_resource_tags_ec2 - boolean - optional - default: false
## The Agent can collect resource tags from the metadata API exposed by the
## ECS Agent for tasks scheduled with the EC2 launch type.
#
# ecs_collect_resource_tags_ec2: false

{{ '{{' }} end -{{ '}}' }}
{{ '{{' }}- if .CRI {{ '}}' }}

###################################
## CRI integration Configuration ##
###################################

## @param cri_socket_path - string - optional - default: ""
## To activate the CRI check, indicate the path of the CRI socket you're using
## and mount it in the container if needed.
## If left empty, the CRI check is disabled.
## see: https://docs.datadoghq.com/integrations/cri/
#
# cri_socket_path: ""

## @param cri_connection_timeout - integer - optional - default: 5
## Configure the initial connection timeout in seconds.
#
# cri_connection_timeout: 5

## @param cri_query_timeout - integer - optional - default: 5
## Configure the timeout in seconds for querying the CRI.
#
# cri_query_timeout: 5

{{ '{{' }} end -{{ '}}' }}
{{ '{{' }}- if .Containerd{{ '}}' }}

##########################################
## Containerd integration Configuration ##
##########################################

## @param cri_socket_path - string - optional - default: /var/run/containerd/containerd.sock
## To activate the Containerd check, indicate the path of the Containerd socket you're using
## and mount it in the container if needed.
## see: https://docs.datadoghq.com/integrations/containerd/
#
# cri_socket_path: /var/run/containerd/containerd.sock

## @param cri_query_timeout - integer - optional - default: 5
## Configure the timeout in seconds for querying the Containerd API.
#
# cri_query_timeout: 5

## @param containerd_namespace - string - optional - default: k8s.io
## Activating the Containerd check also activates the CRI check, as it contains an additional subset of useful metrics.
## Specify here the namespace that Containerd is using on your system. As the Containerd check
## only supports Kubernetes, the default value is `k8s.io`
## https://github.com/containerd/cri/blob/release/1.2/pkg/constants/constants.go#L22-L23
#
# containerd_namespace: k8s.io

{{ '{{' }} end -{{ '}}' }}
{{ '{{' }}- if .Kubelet {{ '}}' }}

###################################################
## Kubernetes kubelet connectivity Configuration ##
###################################################

## @param kubernetes_kubelet_host - string - optional
## The kubelet host should be autodetected when running inside a pod.
## If you run into connectivity issues, set the host here according to your cluster setup.
#
# kubernetes_kubelet_host: <KUBLET_HOST>

## @param kubernetes_http_kubelet_port - integer - optional - default: 10255
## The kubelet http port should be autodetected when running inside a pod.
## If you run into connectivity issues, set the http port here according to your cluster setup.
#
# kubernetes_http_kubelet_port: 10255

## @param kubernetes_https_kubelet_port - integer - optional - default: 10250
## The kubelet https port should be autodetected when running inside a pod.
## If you run into connectivity issues, set the https port here according to your cluster setup.
#
# kubernetes_https_kubelet_port: 10250

## @param kubelet_tls_verify - boolean - optional - default: true
## Set to false if you don't want the Agent to verify the kubelet's certificate when using HTTPS.
#
# kubelet_tls_verify: true

## @param kubelet_client_ca - string - optional - default: /var/run/secrets/kubernetes.io/serviceaccount/ca.crt
## Kublet client CA file path.
#
# kubelet_client_ca: /var/run/secrets/kubernetes.io/serviceaccount/ca.crt

## @param kubelet_auth_token_path - string - optional
## If authentication is needed, the Agent uses the pod's service account's
## credentials. If you want to use a different account, or are running the Agent
## on the host, set a custom token file path here.
#
# kubelet_auth_token_path: <TOKEN_FILE_PATH>

## @param kubelet_client_crt - string - optional
## Set a custom Client CRT file path.
#
# kubelet_client_crt: <CRT_FILE_PATH>

## @param kubelet_client_key - string - optional
## Set a custom Client key file path.
#
# kubelet_client_key: <CLIENT_KEY_FILE_PATH>

## @param kubelet_wait_on_missing_container - integer - optional - default: 0
## On some kubelet versions, containers can take up to a second to
## register in the podlist. This option allows to wait for up to a given
## number of seconds (in 250ms chunks) when a container does not exist in the podlist.
#
# kubelet_wait_on_missing_container: 0

## @param kubelet_cache_pods_duration - integer - optional - default: 5
## Polling frequency in seconds of the Agent to the kubelet "/pods" endpoint.
#
# kubelet_cache_pods_duration: 5

## @param kubernetes_pod_expiration_duration - integer - optional - default: 900
## Set the time in second after which the Agent ignores the pods that have exited.
## Set the duration to 0 to disable this filtering.
#
# kubernetes_pod_expiration_duration: 900

## @param kubelet_listener_polling_interval - integer - optional - default: 5
## Polling frequency in seconds at which autodiscovery will query the pod watcher to detect new pods/containers.
## Note that kubelet_cache_pods_duration needs to be lower than this setting, or autodiscovery will only poll more frequently the same cached data (kubelet_cache_pods_duration controls the cache refresh frequency).
#
# kubelet_listener_polling_interval: 5

{{ '{{' }} end -{{ '}}' }}
{{ '{{' }}- if .KubeApiServer {{ '}}' }}

####################################################
## Kubernetes apiserver integration Configuration ##
####################################################

## @param kubernetes_kubeconfig_path - string - optional - default: ""
## When running in a pod, the Agent automatically uses the pod's service account
## to authenticate with the API server.
## Provide the path to a custom KubeConfig file if you wish to install the Agent out of a pod
## or customize connection parameters.
## See https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/
#
# kubernetes_kubeconfig_path: ""

## @param kubernetes_apiserver_use_protobuf - boolean - optional - default: false
## By default, communication with the apiserver is in json format. Setting the following
## option to true allows communication in the binary protobuf format.
#
# kubernetes_apiserver_use_protobuf: false

## @param kubernetes_collect_metadata_tags - boolean - optional - default: true
## Set this to false to disable tag collection for the Agent.
## Note: In order to collect Kubernetes service names, the Agent needs certain rights.
## See https://github.com/DataDog/datadog-agent/blob/master/Dockerfiles/agent/README.md#kubernetes
#
# kubernetes_collect_metadata_tags: true

## @param kubernetes_metadata_tag_update_freq - integer - optional - default: 60
## Set how often in secons the Agent refreshes the internal mapping of services to ContainerIDs.
#
# kubernetes_metadata_tag_update_freq: 60

## @param kubernetes_apiserver_client_timeout - integer - optional - default: 10
## Set the timeout for the Agent when connecting to the Kubernetes API server.
#
# kubernetes_apiserver_client_timeout: 10

## @param collect_kubernetes_events - boolean - optional - default: false
## Set `collect_kubernetes_events` to true to enable log collection.
## Note: leader election must be enabled must be enabled  bellow to to collect events.
##       Only the leader Agent collects events.
## See https://github.com/DataDog/datadog-agent/blob/master/Dockerfiles/agent/README.md#event-collection
#
# collect_kubernetes_events: false

## @param kubernetes_event_collection_timeout - integer - optional - default: 100
## Set the timeout between two successful event collections in milliseconds.
#
# kubernetes_event_collection_timeout: 100

## @param leader_election - boolean - optional - default: false
## Set the parameter to true to enable leader election on this node.
## See https://github.com/DataDog/datadog-agent/blob/master/Dockerfiles/agent/README.md#leader-election
#
# leader_election: false

## @param leader_lease_duration - integer - optional - default: 60
## Set the leader election lease in seconds.
#
# leader_lease_duration: 60

## @param kubernetes_node_labels_as_tags - map - optional
## Configure node labels that should be collected and their name as host tags.
## Note: Some of these labels are redundant with metadata collected by cloud provider crawlers (AWS, GCE, Azure)
#
# kubernetes_node_labels_as_tags:
#   kubernetes.io/hostname: nodename
#   beta.kubernetes.io/os: os

## @param cluster_name - string - optional
## Set a custom kubernetes cluster identifier to avoid host alias collisions.
## The cluster name can be up to 40 characters with the following restrictions:
## * Lowercase letters, numbers, and hyphens only.
## * Must start with a letter.
## * Must end with a number or a letter.
##
## These are the same rules as the ones enforced by GKE:
## https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters#Cluster.FIELDS.name
#
# cluster_name: <CLUSTER_IDENTIFIER>

## @param disable_cluster_name_tag_key - boolean - optional - default: false
## Disable using the 'cluster_name' tag key to submit orchestrator cluster name tag.
## The Agent will continue sending the cluster name tag with 'kube|ecs_cluster_name' key
## regardless of the value of this parameter.
#
# disable_cluster_name_tag_key: false

{{ '{{' }} end -{{ '}}' }}
{{ '{{' }}- if .CloudFoundryBBS {{ '}}' }}
#######################################################
## Cloud Foundry BBS Configuration for Autodiscovery ##
#######################################################

## @param cloud_foundry_bbs - custom object - optional
## This section configures how the Cluster Agent accesses BBS API to gather information
## necessary for autodiscovery on BBS-based Cloud Foundry deployments.
#
# cloud_foundry_bbs:

  ## @param url - string - optional - default: https://bbs.service.cf.internal:8889
  ## URL of the BBS API.
  #
  # url: https://bbs.service.cf.internal:8889

  ## @param poll_interval - integer - optional - default: 15
  ## Refresh rate of BBS API, in seconds. Values lower than 10 might influence
  ## performance of other operations in the cluster.
  #
  # poll_interval: 15

  ## @param ca_file - string - optional - default: ""
  ## PEM-encoded CA certificate used when connecting to the BBS API.
  #
  # ca_file: ""

  ## @param cert_file - string - optional - default: ""
  ## PEM-encoded client certificate used when connecting to the BBS API.
  #
  # cert_file: ""

  ## @param key_file - string - optional - default: ""
  ## PEM-encoded client key used when connecting to the BBS API.
  #
  # key_file: ""

{{ '{{' }} end -{{ '}}' }}
{{ '{{' }}- if .SNMP {{ '}}' }}

########################
## SNMP Configuration ##
########################

## @param snmp_traps_enabled - boolean - optional - default: false
## Set to true to enable collection of traps.
#
# snmp_traps_enabled: false

## @param snmp_traps_config - custom object - optional
## This section configures SNMP traps collection. Traps are forwarded as logs to Datadog.
## NOTE: This feature is currently **EXPERIMENTAL**. Both behavior and configuration options may
## change in the future. Only SNMPv2 is supported.
#
# snmp_traps_config:

  ## @param port - integer - optional - default: 162
  ## The UDP port to use when listening for incoming trap packets.
  #
  # port: 162

  ## @param community_strings - list of strings - required
  ## A list of known SNMPv2 community strings that devices can use to send traps to the Agent.
  ## Traps with an unknown community string are ignored.
  ## Must be non-empty.
  #
  # community_strings:
  #   - <COMMUNITY_1>
  #   - <COMMUNITY_2>

  ## @param bind_host - string - optional
  ## The hostname to listen on for incoming trap packets.
  ## Defaults to the global `bind_host` config option value.
  #
  # bind_host: <BIND_HOST>

  ## stop_timeout - float - optional - default: 5.0
  ## The maximum number of seconds to wait for the trap server to stop when the Agent shuts down.
  #
  # stop_timeout: 5.0

{{ '{{' }}end -{{ '}}' }}
