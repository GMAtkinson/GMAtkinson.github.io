---
layout: page
title: Doppler
category: Gamekeeper Radar
order: 6
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
  <table id='doppler-table'>
    <thead>
        <tr></tr>
    </thead>
    <tbody></tbody>
  </table>
</form>

<script>
    doppler_params = {
        headers: [
            "Parameter",
            "Symbol",
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

    doppler_params = {
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
                name: "FFT Length",
                symbol: "$N_{FFT}$",
                val: 2048,
                unit: "",
                db_unit: "",
                db: false,
                input: true,
            },

            {
                name: "Doppler Resolution",
                symbol: "$\\Delta f$",
                val: 3.66,
                unit: "$\\mathrm{Hz}$",
                db_unit: "",
                db: false,
                input: false,
            },

            {
                name: "Carrier Frequency",
                symbol: "$f_c$",
                val: 1256.875,
                unit: "$\\mathrm{MHz}$",
                db_unit: "",
                db: false,
                input: true,
            },

            {
                name: "Wavelength",
                symbol: "$\\lambda$",
                val: 0.2384,
                unit: "$\\mathrm{m}$",
                db_unit: "",
                db: false,
                input: false,
            },

            {
                name: "Radial Velocity Resolution",
                symbol: "$\\Delta v_r$",
                val: 0.437,
                unit: "$\\mathrm{m/s}$",
                db_unit: "",
                db: false,
                input: false,
            },
        ]
    }

    generateTable3("doppler-table", doppler_params);

    var prf = 7500;
    var nfft = 2048;
    var fc = 2;
    var wavelength = 0.150;

    document.getElementById("Pulse Repetition Frequency").addEventListener("input", function (e) {
        e.preventDefault(); 

        prf = document.getElementById("Pulse Repetition Frequency").value;

        calculate();
    });

    document.getElementById("FFT Length").addEventListener("input", function (e) {
        e.preventDefault(); 

        nfft = document.getElementById("FFT Length").value;

        calculate();
    });

    document.getElementById("Carrier Frequency").addEventListener("input", function (e) {
        e.preventDefault(); 

        fc = document.getElementById("Carrier Frequency").value;

        wavelength = 299792458.0 / (fc * 1e6);

        //document.getElementById("Wavelength").value = wavelength.toFixed(3);

        calculate();
    });

    // document.getElementById("Wavelength").addEventListener("input", function (e) {
    //     e.preventDefault(); 

    //     wavelength = document.getElementById("Wavelength").value;

    //     fc = 299792458.0 / (wavelength * 1e6);

    //     document.getElementById("Carrier Frequency").value = fc.toFixed(3);

    //     calculate();
    // });

    function calculate() {
        var doppler_freq = prf / nfft;
        //var wavelength = 299792458.0 / (fc * 10e8);
        console.log(wavelength);
        var velocity = wavelength * doppler_freq / 2.0;
        
        document.getElementById("Wavelength").innerHTML = wavelength.toFixed(3);
        document.getElementById("Doppler Resolution").innerHTML = doppler_freq.toFixed(3);
        document.getElementById("Radial Velocity Resolution").innerHTML = velocity.toFixed(3);
    }




</script>

A single frame with 2048 pulses results in a Doppler resolution of $3.66\;\mathrm{Hz}$ or $0.437 \mathrm{m/s}$.