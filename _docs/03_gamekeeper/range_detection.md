---
layout: page
title: Range Detection
category: Gamekeeper Radar
order: 5
---

---

# Matched Filtering

# Maximum Unambiguous Range

The maximum unambiguous range is given by

\begin{equation}
R\_{max} = \frac{c(PRI-\tau_p)}{2}
\end{equation}

where $T$ is the pulse repetition time, $\tau$ is the pulse duration, and $c$ is the speed of light.

<form id="unambiguous-range-form">
  <table id='unambiguous-range-table'>
    <thead>
        <tr></tr>
    </thead>
    <tbody></tbody>
  </table>
</form>

With a pulse repetition time of $PRI=133$ $\mathrm{\mu}\mathrm{s}$ and a pulse duration of $\tau_p=1$ $\mathrm{\mu}\mathrm{s}$, the Gamekeeper radar has a theoretical maximum unambiguous range of $R_{max}=20235.83$ $\mathrm{m}$. However, the practical maximum range of the radar is determined by the transmit power and the target SNR required for a detection.

# Range Resolution

Since the Gamekeeper radar is a monostatic system transmitting a simple pulsed waveform, the range resolution is given by

\begin{equation}
\Delta R = \frac{c}{2B}
\end{equation}

where $B$ is the bandwidth of the transmitted pulse and $c$ is the speed of light.

# Range Estimation

<form id="range-form">
  <table id='json-table2'>
    <thead>
        <tr></tr>
    </thead>
    <tbody></tbody>
  </table>
</form>

<script>

    unambiguous_range = {
        headers: [
            "Parameter",
            "Symbol",
            "Value",
            "unit",
        ],

        fields: [
            {
                name: "Pulse Repetition Frequency",
                symbol: "$PRF$",
                val: 7353,
                unit: "$\\mathrm{Hz}$",
                db_unit: "",
                db: false,
                input: true,
            },

            {
                name: "Pulse Repetition Interval",
                symbol: "$PRI$",
                val: 135.9989,
                unit: "$\\mathrm{\\mu s}$",
                db_unit: "",
                db: false,
                input: true,
            },

            {
                name: "Pulse Width",
                symbol: "$\\tau_p$",
                val: 1,
                unit: "$\\mathrm{\\mu s}$",
                db_unit: "",
                db: false,
                input: true,
            },

            {
                name: "Maximum Unambiguous Range",
                symbol: "$R_{max}$",
                val: 20235.83,
                unit: "$\\mathrm{m}$",
                db_unit: "",
                db: false,
                input: false,
            },
        ]
    }

    generateTable3("unambiguous-range-table", unambiguous_range)


    // unambiguous_range_table = {
    //     headers: [
    //         "Parameter",
    //         "Value",
    //         "Unit",
    //     ],
    //     fields: [

    //         {
    //             o_pulse_repetition_frequency: "$PRF$",
    //             i_prf: 7353,
    //             o_unit: "$\\mathrm{Hz}$",
    //         },

    //         {
    //             o_pulse_repetition_interval: "$PRI$",
    //             i_rep_time: 135.9989,
    //             o_unit: "$\\mathrm{\\mu s}$",
    //         },

    //         {
    //             o_pulse_width: "$\\tau_p$",
    //             i_pulse_width: 1,
    //             o_unit: "$\\mathrm{\\mu s}$",
    //         },

    //         {
    //             o_maximum_unambiguous_range: "$R_{max}$",
    //             o_unambiguous_range: 20235.83,
    //             o_unit: "$\\mathrm{m}$",
    //         },
    //     ]
    // }

    range_table = {
        headers: [
            "Parameter",
            "Value",
            "Unit",
        ],
        fields: [
            {
                o_param: "$B$",
                i_bandwidth: 2,
                o_unit: "$\\mathrm{MHz}$",
            },

            {
                o_param: "$\\Delta R$",
                o_range_res: 74.95,
                o_unit: "$\\mathrm{m}$",
            },
        ]
    }

    range_table = {
        headers: [
            "Parameter",
            "Symbol",
            "Value",
            "unit",
        ],
        fields: [
            {
                name: "Bandwidth",
                symbol: "$B$",
                val: 2,
                unit: "$\\mathrm{MHz}$",
                input: true,
            },

            {
                name: "Range Resolution",
                symbol: "$\\Delta R$",
                val: 74.95,
                unit: "$\\mathrm{m}$", 
                input: false,
            },
        ]
    }

    //generateTable("unambiguous-range-table", unambiguous_range_table)
    
    var rep_time = 133;
    var pulse_width = 1;
    var prf = 7500;


    var input_eventListenerIDs = ["Pulse Repetition Frequency", "Pulse Repetition Interval"];

    input_eventListenerIDs.forEach(function (input) {
        document.getElementById(input).addEventListener("input", function (e) {
            e.preventDefault(); 
            
            if (input == "Pulse Repetition Frequency") {
                prf = document.getElementById(input).value;
                rep_time = 1e6 / prf;
                document.getElementById("Pulse Repetition Interval").value = rep_time.toFixed(2);
            } else {
                rep_time = document.getElementById(input).value;
                prf = 10e5 / rep_time;
                document.getElementById("Pulse Repetition Frequency").value = prf.toFixed(2);
            }

            var unambiguous_range = 299792458.0 * (rep_time - pulse_width) * 10e-7 / 2.0;

            document.getElementById("Maximum Unambiguous Range").innerHTML = unambiguous_range.toFixed(2);
            
        });
    });

    document.getElementById("Pulse Width").addEventListener("input", function (e) {
        e.preventDefault();
        pulse_width = document.getElementById("Pulse Width").value;
        var unambiguous_range = 299792458.0 * (rep_time - pulse_width) * 10e-7 / 2.0;

        document.getElementById("Maximum Unambiguous Range").innerHTML = unambiguous_range.toFixed(2);
        
    });


    generateTable3("json-table2", range_table);


    document.getElementById("Bandwidth").addEventListener("input", function (e) {
        e.preventDefault(); 

        var bandwidth = document.getElementById("Bandwidth").value;
        if(!bandwidth) {
            bandwidth = 1.0;
        }
        var range_res = 299792458.0 / (bandwidth * 10e5 * 2.0);

        document.getElementById("Range Resolution").innerHTML = range_res.toFixed(2);

        
    });
</script>