[![Test playbook](https://github.com/mcdermg/ansiblePi/actions/workflows/vagrant-test.yaml/badge.svg)](https://github.com/mcdermg/ansiblePi/actions/workflows/vagrant-test.yaml)

# ansiblePi
Ansible playbook &amp; roles for Raspberry Pi setup. This bootstraps and customizes the Pi/s and installs various software that I got tired of doing manually.

## Testing

The testing folder  contains a vagrant file. This references the roles above and spin up a vagrant box and run through the roles so that it is possible to verify the behavior of the playbook execution not on a real raspberry pi.

### GitHub Actions

A workflow for a GitHub Action that relies on mac OS, which contains Vagrant out of the box, is used in order to run the playbook to verify that all the roles and steps are working. This is used so that issues and errors are not discovered when running against physical devices.

#### Skipped steps
In general a user var is used for the playbook and in the workflow  the `vagrant` user is used as opposed to the Pi user in the actual real world running of the playbook against a physical Raspberry Pi.
For the GitHub action run in two cases the steps are skipped. These steps are confirmed to work on a real raspberry pi so for the sake of ease of use those particular steps are skipped.

### Local testing

Can also run locally if located in the `tests/` directory via:

```
vagrant up --provision
```

The following command may also be of use when testing locally.
```
vagrant reload --provision
vagrant provision
```
