![Ansible Lint](https://github.com/mcdermg/ansiblePi/workflows/Ansible%20Lint/badge.svg?branch=main)

# ansiblePi
Ansible playbook &amp; roles for Raspberry Pi setup for home monitoring

## Testing

The testing folder  contains a vagrant file. This references the roles above and will spin up a vagrant box and run through the roles so that it is possible to verify the behavior of the playbook execution
not on a real raspberry pi.

Can also run locally if located in the `tests/` directory via:

```
vagrant up --provision
```

The following command may also be of use when testing locally.
```
vagrant reload --provision
vagrant provision
```
