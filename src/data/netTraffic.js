export const NetTrafficGreenData = [
    {
      "period": "today",
      "rx_MiB": 5.81,
      "tx_MiB": 3.57,
      "total_MiB": 9.38,
      "speed_kbit_s": 1.34,
      "chart_data": [
        {
          "name": "rx_percentage",
          "value": 61.94
        },
        {
          "name": "tx_percentage",
          "value": 38.06
        }
      ]
    },
    {
      "period": "yesterday",
      "rx_MiB": 13.11,
      "tx_MiB": 32.34,
      "total_MiB": 45.46,
      "speed_kbit_s": 4.41,
      "chart_data": [
        {
          "name": "rx_percentage",
          "value": 28.84
        },
        {
          "name": "tx_percentage",
          "value": 71.16
        }
      ]
    },
    {
      "period": "2025-06",
      "rx_MiB": 37.47,
      "tx_MiB": 68.11,
      "total_MiB": 105.57,
      "speed_kbit_s": 2.19,
      "chart_data": [
        {
          "name": "rx_percentage",
          "value": 35.49
        },
        {
          "name": "tx_percentage",
          "value": 64.51
        }
      ]
    },
    {
      "period": "2025-05",
      "rx_MiB": 151.21,
      "tx_MiB": 180.07,
      "total_MiB": 331.28,
      "speed_kbit_s": 1.04,
      "chart_data": [
        {
          "name": "rx_percentage",
          "value": 45.64
        },
        {
          "name": "tx_percentage",
          "value": 54.36
        }
      ]
    },
  ]

  export const NetTrafficRedData = [
      {
        "period": "today",
        "rx_MiB": 20.76,
        "tx_MiB": 0.54525,  // Converted 545.25 KiB to MiB (545.25 / 1024)
        "total_MiB": 21.30,
        "speed_kbit_s": 3.00,
        "chart_data": [
          {
            "name": "rx_percentage",
            "value": 97.47  // Calculated: (20.76 / 21.30) * 100
          },
          {
            "name": "tx_percentage",
            "value": 2.53   // Calculated: (0.54525 / 21.30) * 100
          }
        ]
      },
      {
        "period": "yesterday",
        "rx_MiB": 550.04,
        "tx_MiB": 0.81226,  // Converted 812.26 KiB to MiB (812.26 / 1024)
        "total_MiB": 550.83,
        "speed_kbit_s": 53.48,
        "chart_data": [
          {
            "name": "rx_percentage",
            "value": 99.86  // Calculated: (550.04 / 550.83) * 100
          },
          {
            "name": "tx_percentage",
            "value": 0.14   // Calculated: (0.81226 / 550.83) * 100
          }
        ]
      },
      {
        "period": "2025-06",
        "rx_MiB": 1290.24,  // Converted 1.26 GiB to MiB (1.26 * 1024)
        "tx_MiB": 2.35,
        "total_MiB": 1300.48, // Converted 1.27 GiB to MiB (1.27 * 1024), rounded to nearest MiB
        "speed_kbit_s": 26.83,
        "chart_data": [
          {
            "name": "rx_percentage",
            "value": 99.21  // Calculated: (1290.24 / 1300.48) * 100
          },
          {
            "name": "tx_percentage",
            "value": 0.79   // Calculated: (2.35 / 1300.48) * 100
          }
        ]
      },
      {
        "period": "2025-05",
        "rx_MiB": 6155.52,  // Converted 6.01 GiB to MiB (6.01 * 1024)
        "tx_MiB": 10.32,
        "total_MiB": 6164.48, // Converted 6.02 GiB to MiB (6.02 * 1024), rounded to nearest MiB
        "speed_kbit_s": 19.30,
        "chart_data": [
          {
            "name": "rx_percentage",
            "value": 99.85  // Calculated: (6155.52 / 6164.48) * 100
          },
          {
            "name": "tx_percentage",
            "value": 0.15   // Calculated: (10.32 / 6164.48) * 100
          }
        ]
      },
      {
        "period": "all time",
        "rx_MiB": 7444.48,  // Converted 7.27 GiB to MiB (7.27 * 1024)
        "tx_MiB": 12928.0,  // Converted 12.67 GiB to MiB (12.67 * 1024)
        "total_MiB": 7454.72,  // Converted 7.28 GiB to MiB (7.28 * 1024)
        "since_date": "2025-05-09"
      }
    ]