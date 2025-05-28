const ipAddressBlocklist = [
    {
      "id": 1,
      "Blocklist": "3CORESEC_SCAN",
      "Name": "3CORESec Scan and IDS Blocklist",
      "Category": "Reputation",
      "Enable": false
    },
    {
      "id": 2,
      "Blocklist": "3CORESEC_SSH",
      "Name": "3CORESec SSH Activity Blocklist",
      "Category": "Attacker",
      "Enable": false
    },
    {
      "id": 3,
      "Blocklist": "3CORESEC_WEB",
      "Name": "3CORESec Web Server Activity Blocklist",
      "Category": "Attacker",
      "Enable": false
    },
    {
      "id": 4,
      "Blocklist": "BLOCKLIST_DE",
      "Name": "Blocklist.de all attacks list",
      "Category": "Attacker",
      "Enable": false
    },
    {
      "id": 5,
      "Blocklist": "BOGON",
      "Name": "Bogus address list (Martian)",
      "Category": "Invalid Address",
      "Enable": false
    },
    {
      "id": 6,
      "Blocklist": "BOGON_FULL",
      "Name": "Full Bogus Address List",
      "Category": "Invalid Address",
      "Enable": false
    },
    {
      "id": 7,
      "Blocklist": "CIARMY",
      "Name": "The CINS Army List",
      "Category": "Reputation",
      "Enable": false
    },
    {
      "id": 8,
      "Blocklist": "DSHIELD",
      "Name": "Dshield.org Recommended Block List",
      "Category": "Attacker",
      "Enable": false
    },
    {
      "id": 9,
      "Blocklist": "EMERGING_COMPROMISED",
      "Name": "Emerging Threats Compromised IPs",
      "Category": "Attacker",
      "Enable": false
    },
    {
      "id": 10,
      "Blocklist": "EMERGING_FWRULE",
      "Name": "Emerging Threats Blocklist",
      "Category": "Composite",
      "Enable": false
    },
    {
      "id": 11,
      "Blocklist": "FEODO_RECOMMENDED",
      "Name": "Feodo Trojan IP Blocklist (Recommended)",
      "Category": "Malware C&C",
      "Enable": false
    },
    {
      "id": 12,
      "Blocklist": "SHODAN",
      "Name": "ISC Shodan scanner blocklist",
      "Category": "Scanner",
      "Enable": false
    },
    {
      "id": 13,
      "Blocklist": "SPAMHAUS_DROP",
      "Name": "Spamhaus Don't Route or Peer List",
      "Category": "Reputation",
      "Enable": false
    },
    {
      "id": 14,
      "Blocklist": "THREATVIEW_IO_IP",
      "Name": "Threatview.io Malicious IP Blocklist for known Bad IP addresses",
      "Category": "Reputation",
      "Enable": false
    },
    {
      "id": 15,
      "Blocklist": "TOR_ALL",
      "Name": "Known Tor Nodes",
      "Category": "Application",
      "Enable": false
    },
    {
      "id": 16,
      "Blocklist": "TOR_EXIT",
      "Name": "Known Tor Exit Nodes",
      "Category": "Application",
      "Enable": false
    }
  ]

  export default ipAddressBlocklist;