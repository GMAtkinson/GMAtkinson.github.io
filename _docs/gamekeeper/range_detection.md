---
layout: page
title: Range Detection
category: Gamekeeper Radar
order: 4
---
---
# Matched Filtering



# Maximum Unambiguous Range

The maximum unambiguous range is given by

\begin{equation}
    R_{max} = \frac{c(T-\tau)}{2}
\end{equation}

where $T$ is the pulse repetition time, $\tau$ is the pulse duration, and $c$ is the speed of light.

<form id="unambiguous-range-form">
  <table id='json-table1'>
    <thead>
        <tr></tr>
    </thead>
    <tbody></tbody>
  </table>
</form>

With a pulse repetition time of $T=133$ $\mathrm{\mu}\mathrm{s}$ and a pulse duration of $\tau=1$ $\mathrm{\mu}\mathrm{s}$, the Gamekeeper radar has a theoretical maximum unambiguous range of $R_{max}=19836.27$ $\mathrm{m}$. However, the practical maximum range of the radar is determined by the transmit power and the target SNR required for a detection. 

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
    unambiguous_range_table = {
        headers: [
            "Parameter",
            "Value",
            "Unit",
        ],
        fields: [

            {
                o_param: "$PRF$",
                i_prf: 7500,
                o_unit: "$\\mathrm{Hz}$",
            },

            {
                o_param: "$T$",
                i_rep_time: 133,
                o_unit: "$\\mathrm{\\mu s}$",
            },

            {
                o_param: "$\\tau$",
                i_pulse_width: 1,
                o_unit: "$\\mathrm{\\mu s}$",
            },

            {
                o_param: "$R_{max}$",
                o_unambiguous_range: 19836.27,
                o_unit: "$\\mathrm{m}$",
            },
        ]
    }

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


    unambiguous_range_table.headers.forEach(function(item) {
        document.getElementById("json-table1").children[0].children[0].innerHTML += "<th>" + item + "</th>";
    })
    
    var test = "";
    unambiguous_range_table.fields.forEach(function(item) {
        test += "<tr>";
        var row_values = Object.entries(item);
        for(const [key, val] of row_values) {
            if(key.startsWith("i_")) {
                test += "<td>" + "<input id=" + key + " type='text' value='" + val + "'></td>";
            } else {
                test += "<td id=" + key + " >" + val + "</td>";
            }
            
        }
        test += "</tr>";
    })
    document.getElementById("json-table1").children[1].innerHTML += test;

    
    var rep_time = 133;
    var pulse_width = 1;
    var prf = 7500;


    document.getElementById("i_prf").addEventListener("input", function (e) {
        e.preventDefault(); 
        
        prf = document.getElementById("i_prf").value;

        rep_time = 10e5 / prf;

        document.getElementById("i_rep_time").value = rep_time.toFixed(2);

        var unambiguous_range = 299792458.0 * (rep_time - pulse_width) * 10e-7 / 2.0;

        document.getElementById("o_unambiguous_range").innerHTML = unambiguous_range.toFixed(2);
        
    });

    document.getElementById("i_rep_time").addEventListener("input", function (e) {
        e.preventDefault(); 
        
        rep_time = document.getElementById("i_rep_time").value;

        prf = 10e5 / rep_time;

        document.getElementById("i_prf").value = prf.toFixed(2);

        var unambiguous_range = 299792458.0 * (rep_time - pulse_width) * 10e-7 / 2.0;
        console.log(rep_time * 10e-7);

        document.getElementById("o_unambiguous_range").innerHTML = unambiguous_range.toFixed(2);
        
    });

    document.getElementById("i_pulse_width").addEventListener("input", function (e) {
        e.preventDefault(); 
        console.log("Jim");
        pulse_width = document.getElementById("i_pulse_width").value;
        var unambiguous_range = 299792458.0 * (rep_time - pulse_width) * 10e-7 / 2.0;

        document.getElementById("o_unambiguous_range").innerHTML = unambiguous_range.toFixed(2);
        
    });


    range_table.headers.forEach(function(item) {
        document.getElementById("json-table2").children[0].children[0].innerHTML += "<th>" + item + "</th>";
    })
    
    var test = "";
    range_table.fields.forEach(function(item) {
        test += "<tr>";
        var row_values = Object.entries(item);
        for(const [key, val] of row_values) {
            if(key.startsWith("i_")) {
                test += "<td>" + "<input id=" + key + " type='text' value='" + val + "'></td>";
            } else {
                test += "<td id=" + key + " >" + val + "</td>";
            }
            
        }
        test += "</tr>";
    })
    document.getElementById("json-table2").children[1].innerHTML += test;


    document.getElementById("i_bandwidth").addEventListener("input", function (e) {
        e.preventDefault(); 

        var bandwidth = document.getElementById("i_bandwidth").value;
        if(!bandwidth) {
            bandwidth = 1.0;
        }
        var range_res = 299792458.0 / (bandwidth * 10e5 * 2.0);

        document.getElementById("o_range_res").innerHTML = range_res;

        
    });


</script>

