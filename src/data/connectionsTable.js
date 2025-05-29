const connectionsData = [
    {
      "id": 1,
      "Protocol": "TCP",
      "Source_IP_Port": "192.168.1.100:60440",
      "Dest_IP_Port": "192.168.1.11:444",
      "Data_Transfer_Up": "> 7.51 KB",
      "Data_Transfer_Down": "< 113.65 KB",
      "Connection_Status": "ESTABLISHED",
      "Expires_H_M_S": "4d 23h 59m 59s",
      "connection_type": "LAN"
    },
    {
      "id": 2,
      "Protocol": "TCP",
      "Source_IP_Port": "192.168.1.100:60442",
      "Dest_IP_Port": "192.168.1.11:444",
      "Data_Transfer_Up": "> 5.54 KB",
      "Data_Transfer_Down": "< 95.59 KB",
      "Connection_Status": "ESTABLISHED",
      "Expires_H_M_S": "4d 23h 59m 57s",
      "connection_type": "INTERNET"
    },
    {
      "id": 3,
      "Protocol": "TCP",
      "Source_IP_Port": "192.168.1.100:60439",
      "Dest_IP_Port": "192.168.1.11:444",
      "Data_Transfer_Up": "> 7.49 KB",
      "Data_Transfer_Down": "< 30.27 KB",
      "Connection_Status": "ESTABLISHED",
      "Expires_H_M_S": "4d 23h 59m 57s",
      "connection_type": "DMZ"
    },
    {
      "id": 4,
      "Protocol": "TCP",
      "Source_IP_Port": "192.168.1.100:60443",
      "Dest_IP_Port": "192.168.1.11:444",
      "Data_Transfer_Up": "> 3.55 KB",
      "Data_Transfer_Down": "< 11.07 KB",
      "Connection_Status": "ESTABLISHED",
      "Expires_H_M_S": "4d 23h 59m 52s",
      "connection_type": "Wireless"
    },
    {
      "id": 5,
      "Protocol": "TCP",
      "Source_IP_Port": "192.168.1.100:60441",
      "Dest_IP_Port": "192.168.1.11:444",
      "Data_Transfer_Up": "> 3.55 KB",
      "Data_Transfer_Down": "< 11.54 KB",
      "Connection_Status": "ESTABLISHED",
      "Expires_H_M_S": "4d 23h 59m 52s",
      "connection_type": "IPFire"
    },
    {
      "id": 6,
      "Protocol": "TCP",
      "Source_IP_Port": "192.168.1.100:59824",
      "Dest_IP_Port": "192.168.1.11:444",
      "Data_Transfer_Up": "> 67.04 KB",
      "Data_Transfer_Down": "< 190.22 KB",
      "Connection_Status": "ESTABLISHED",
      "Expires_H_M_S": "4d 23h 59m 52s",
      "connection_type": "VPN"
    },
    {
      "id": 7,
      "Protocol": "TCP",
      "Source_IP_Port": "192.168.1.100:60438",
      "Dest_IP_Port": "192.168.1.11:444",
      "Data_Transfer_Up": "> 194 KB",
      "Data_Transfer_Down": "< 102 KB",
      "Connection_Status": "TIME_WAIT",
      "Expires_H_M_S": "1m 51s",
      "connection_type": "WireGuard"
    },
    {
      "id": 8,
      "Protocol": "TCP",
      "Source_IP_Port": "192.168.1.100:60437",
      "Dest_IP_Port": "192.168.1.11:444",
      "Data_Transfer_Up": "> 2.03 KB",
      "Data_Transfer_Down": "< 102 KB",
      "Connection_Status": "TIME_WAIT",
      "Expires_H_M_S": "1m 51s",
      "connection_type": "OpenVPN"
    },
    {
      "id": 9,
      "Protocol": "TCP",
      "Source_IP_Port": "192.168.1.100:60436",
      "Dest_IP_Port": "192.168.1.11:444",
      "Data_Transfer_Up": "> 2.03 KB",
      "Data_Transfer_Down": "< 1005 B",
      "Connection_Status": "TIME_WAIT",
      "Expires_H_M_S": "1m 51s",
      "connection_type": "Multicast"
    },
    {
      "id": 10,
      "Protocol": "TCP",
      "Source_IP_Port": "192.168.1.100:60435",
      "Dest_IP_Port": "192.168.1.11:444",
      "Data_Transfer_Up": "> 2.00 KB",
      "Data_Transfer_Down": "< 102 KB",
      "Connection_Status": "TIME_WAIT",
      "Expires_H_M_S": "1m 51s",
      "connection_type": "LAN"
    },
    {
      "id": 11,
      "Protocol": "TCP",
      "Source_IP_Port": "192.168.1.100:60434",
      "Dest_IP_Port": "192.168.1.11:444",
      "Data_Transfer_Up": "> 197 KB",
      "Data_Transfer_Down": "< 102 KB",
      "Connection_Status": "TIME_WAIT",
      "Expires_H_M_S": "1m 51s",
      "connection_type": "INTERNET"
    },
    {
      "id": 12,
      "Protocol": "TCP",
      "Source_IP_Port": "192.168.1.100:60433",
      "Dest_IP_Port": "192.168.1.11:444",
      "Data_Transfer_Up": "> 2.03 KB",
      "Data_Transfer_Down": "< 1005.00 B",
      "Connection_Status": "TIME_WAIT",
      "Expires_H_M_S": "1m 51s",
      "connection_type": "DMZ"
    },
    {
      "id": 13,
      "Protocol": "TCP",
      "Source_IP_Port": "192.168.1.100:60432",
      "Dest_IP_Port": "192.168.1.11:444",
      "Data_Transfer_Up": "> 194 KB",
      "Data_Transfer_Down": "< 102 KB",
      "Connection_Status": "TIME_WAIT",
      "Expires_H_M_S": "1m 51s",
      "connection_type": "Wireless"
    },
    {
      "id": 14,
      "Protocol": "TCP",
      "Source_IP_Port": "192.168.1.100:60431",
      "Dest_IP_Port": "192.168.1.11:444",
      "Data_Transfer_Up": "> 194 KB",
      "Data_Transfer_Down": "< 102 KB",
      "Connection_Status": "TIME_WAIT",
      "Expires_H_M_S": "1m 51s",
      "connection_type": "IPFire"
    },
    {
      "id": 15,
      "Protocol": "TCP",
      "Source_IP_Port": "192.168.1.100:60430",
      "Dest_IP_Port": "192.168.1.11:444",
      "Data_Transfer_Up": "> 194 KB",
      "Data_Transfer_Down": "< 102 KB",
      "Connection_Status": "TIME_WAIT",
      "Expires_H_M_S": "1m 51s",
      "connection_type": "VPN"
    },
    {
      "id": 16,
      "Protocol": "TCP",
      "Source_IP_Port": "192.168.1.100:60429",
      "Dest_IP_Port": "192.168.1.11:444",
      "Data_Transfer_Up": "> 2.03 KB",
      "Data_Transfer_Down": "< 102 KB",
      "Connection_Status": "TIME_WAIT",
      "Expires_H_M_S": "1m 51s",
      "connection_type": "WireGuard"
    },
    {
      "id": 17,
      "Protocol": "TCP",
      "Source_IP_Port": "192.168.1.100:60428",
      "Dest_IP_Port": "192.168.1.11:444",
      "Data_Transfer_Up": "> 194 KB",
      "Data_Transfer_Down": "< 1006.00 B",
      "Connection_Status": "TIME_WAIT",
      "Expires_H_M_S": "1m 51s",
      "connection_type": "OpenVPN"
    },
    {
      "id": 18,
      "Protocol": "TCP",
      "Source_IP_Port": "192.168.1.100:60427",
      "Dest_IP_Port": "192.168.1.11:444",
      "Data_Transfer_Up": "> 2.03 KB",
      "Data_Transfer_Down": "< 102 KB",
      "Connection_Status": "TIME_WAIT",
      "Expires_H_M_S": "1m 51s",
      "connection_type": "Multicast"
    },
    {
      "id": 19,
      "Protocol": "TCP",
      "Source_IP_Port": "192.168.1.100:60426",
      "Dest_IP_Port": "192.168.1.11:444",
      "Data_Transfer_Up": "> 194 KB",
      "Data_Transfer_Down": "< 102 KB",
      "Connection_Status": "TIME_WAIT",
      "Expires_H_M_S": "1m 51s",
      "connection_type": "LAN"
    },
    {
      "id": 20,
      "Protocol": "TCP",
      "Source_IP_Port": "192.168.1.100:60425",
      "Dest_IP_Port": "192.168.1.11:444",
      "Data_Transfer_Up": "> 2.00 KB",
      "Data_Transfer_Down": "< 102 KB",
      "Connection_Status": "TIME_WAIT",
      "Expires_H_M_S": "1m 51s",
      "connection_type": "INTERNET"
    }
  ]

  export default connectionsData;