---
layout: page
title: Doppler
category: Gamekeeper Radar
order: 5
---
---

# Doppler Resolution

The Doppler resolution is given by

\begin{equation}
    \Delta f = \frac{PRF}{N_{fft}}
\end{equation}

where $PRF$ is the Pulse Repetition Frequency and $N_{fft}$ is the number of Doppler bins or FFT length.

The corresponding radial velocity resolution is given by

\begin{equation}
    v_r = \frac{\lambda\Delta f}{2} = \frac{c \Delta f}{2f_c}
\end{equation}

where $\lambda = \frac{c}{f_c}$ is the carrier wavelength, and $f_c$ denotes the carrier frequency.

<form id="doppler-form">
  <table id='json-table'>
    <thead>
        <tr></tr>
    </thead>
    <tbody></tbody>
  </table>
</form>

<script>
    doppler_table = {
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
                o_param: "$N_{fft}$",
                i_nfft: 2048,
                o_unit: "",
            },

            {
                o_param: "$\\Delta f$",
                o_doppler_freq: 3.66,
                o_unit: "$\\mathrm{Hz}$",
            },

            {
                o_param: "$f_c$",
                i_fc: 2,
                o_unit: "$\\mathrm{GHz}$",
            },

            {
                o_param: "$\\lambda$",
                i_lambda: 0.150,
                o_unit: "$\\mathrm{m}$",
            },
            
            {
                o_param: "$\\Delta v_r$",
                o_velocity: 0.274,
                o_unit: "$\\mathrm{m/s}$",
            },
        ]
    }


    doppler_table.headers.forEach(function(item) {
        document.getElementById("json-table").children[0].children[0].innerHTML += "<th>" + item + "</th>";
    })
    
    var test = "";
    doppler_table.fields.forEach(function(item) {
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
    document.getElementById("json-table").children[1].innerHTML += test;

    var form = document.getElementById("range-form"); 

    var prf = 7500;
    var nfft = 2048;
    var fc = 2;
    var wavelength = 0.150;

    document.getElementById("i_prf").addEventListener("input", function (e) {
        e.preventDefault(); 

        prf = document.getElementById("i_prf").value;

        calculate();
    });

    document.getElementById("i_nfft").addEventListener("input", function (e) {
        e.preventDefault(); 

        nfft = document.getElementById("i_nfft").value;

        calculate();
    });

    document.getElementById("i_fc").addEventListener("input", function (e) {
        e.preventDefault(); 

        fc = document.getElementById("i_fc").value;

        wavelength = 299792458.0 / (fc * 10e8);

        document.getElementById("i_lambda").value = wavelength.toFixed(3);

        calculate();
    });

    document.getElementById("i_lambda").addEventListener("input", function (e) {
        e.preventDefault(); 

        wavelength = document.getElementById("i_lambda").value;

        fc = 299792458.0 / (wavelength * 10e8);

        document.getElementById("i_fc").value = fc.toFixed(3);

        calculate();
    });

    function calculate() {
        var doppler_freq = prf / nfft;
        //var wavelength = 299792458.0 / (fc * 10e8);
        console.log(wavelength);
        var velocity = wavelength * doppler_freq / 2.0;

        document.getElementById("o_doppler_freq").innerHTML = doppler_freq.toFixed(3);
        document.getElementById("o_velocity").innerHTML = velocity.toFixed(3);
    }




</script>

A single frame with 2048 pulses results in a Doppler resolution of $3.66\;\mathrm{Hz}$.