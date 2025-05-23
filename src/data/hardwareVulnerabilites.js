const hardwareVulnerabilities = [
    {
      "id": 1,
      "Vulnerability": "Downfall/Gather Data Sampling (CVE-2022-40982)",
      "Status": "Not Affected"
    },
    {
      "id": 2,
      "Vulnerability": "ITLB Multihit (CVE-2018-12207)",
      "Status": "KVM: Mitigation: VMX unsupported"
    },
    {
      "id": 3,
      "Vulnerability": "Foreshadow (CVE-2018-3620)",
      "Status": "Not Affected"
    },
    {
      "id": 4,
      "Vulnerability": "Fallout/ZombieLoad/RIDL (CVE-2018-12126, CVE-2018-12130, CVE-2018-12127, CVE-2019-11091)",
      "Status": "Not Affected"
    },
    {
      "id": 5,
      "Vulnerability": "Meltdown (CVE-2017-5754)",
      "Status": "Not Affected"
    },
    {
      "id": 6,
      "Vulnerability": "MMIO Stale Data (CVE-2022-21123, CVE-2022-21125, CVE-2022-21127, CVE-2022-21166)",
      "Status": "Vulnerable - Clear CPU buffers attempted, no microcode; SMT Host state unknown"
    },
    {
      "id": 7,
      "Vulnerability": "Register File Data Sampling (RFDS) (CVE-2023-28746)",
      "Status": "Not Affected"
    },
    {
      "id": 8,
      "Vulnerability": "Retbleed (CVE-2022-29900, CVE-2022-29901)",
      "Status": "Mitigated - Enhanced IBRS"
    },
    {
      "id": 9,
      "Vulnerability": "Speculative Return Stack Overflow (CVE-2023-20569)",
      "Status": "Not Affected"
    },
    {
      "id": 10,
      "Vulnerability": "Spectre Variant 4 (CVE-2018-3639)",
      "Status": "Vulnerable"
    },
    {
      "id": 11,
      "Vulnerability": "Spectre Variant 1 (CVE-2017-5753)",
      "Status": "Mitigated - usercopy/swapgs barriers and __user_pointer sanitization"
    },
    {
      "id": 12,
      "Vulnerability": "Spectre Variant 2 (CVE-2017-5715)",
      "Status": "Mitigated - Enhanced / Automatic IBRS; RSB filling; PBRSB-IBRS: SW sequence; BHI: SW loop, KVM: SW loop"
    },
    {
      "id": 13,
      "Vulnerability": "Special register buffer data sampling (CVE-2020-0543)",
      "Status": "Unknown: Dependent on hypervisor status"
    },
    {
      "id": 14,
      "Vulnerability": "TSX Async Abort/ZombieLoad v2 (CVE-2019-11135)",
      "Status": "Not Affected"
    }
  ]

  export default hardwareVulnerabilities;