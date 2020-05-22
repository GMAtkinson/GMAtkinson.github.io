---
layout: page
title: Power Budget
category: Gamekeeper Radar
order: 2
---
---

# Target Parameters

<form id="tg-form">
  <table id='target-parameters-table'>
    <thead>
        <tr></tr>
    </thead>
    <tbody></tbody>
  </table>
</form>

<script>

    target_parameters = {
        headers: [
            "Parameter",
            "Symbol",
            "Linear",
            "unit",
            "Log",
            "unit",
        ],

        fields: [
            {
                name: "RCS",
                symbol: "$\\sigma$",
                val: 0.01,
                unit: "$\\mathrm{m^2}$",
                db_unit: "$\\mathrm{dBsm}$",
                db: false,
                input: true,
            },

            {
                name: "Range",
                symbol: "$R$",
                val: 1000,
                unit: "$\\mathrm{m}$",
                db_unit: "",
                db: false,
                input: true,
            },

            {
                name: "Height",
                symbol: "$h_t$",
                val: 100,
                unit: "$\\mathrm{m}$",
                db_unit: "",
                db: false,
                input: true,
            },

            {
                name: "Radial Speed",
                symbol: "$v_r$",
                val: 10,
                unit: "$\\mathrm{m/s}$",
                db_unit: "",
                db: false,
                input: true,
            },
        ]
    }

    generateTable2("target-parameters-table", target_parameters)

</script>

# Enviroment Parameters

<form id="ep-form">
  <table id='enviroment-parameters-table'>
    <thead>
        <tr></tr>
    </thead>
    <tbody></tbody>
  </table>
</form>

<script>

    enviroment_parameters = {
        headers: [
            "Parameter",
            "Symbol",
            "Linear",
            "unit",
            "Log",
            "unit",
        ],

        fields: [
            {
                name: "Atmospheric Loss",
                symbol: "$L$",
                val: 0,
                unit: "",
                db_unit: "$\\mathrm{dB}$",
                db: true,
                input: true,
            },
        ]
    }

    generateTable2("enviroment-parameters-table", enviroment_parameters)

</script>


# Radar Parameters

<form id="rp-form">
  <table id='radar-parameters-table'>
    <thead>
        <tr></tr>
    </thead>
    <tbody></tbody>
  </table>
</form>

<script>

    radar_parameters = {
        headers: [
            "Parameter",
            "Symbol",
            "Linear",
            "unit",
            "Log",
            "unit",
        ],

        fields: [
            {
                name: "Sampling Frequency",
                symbol: "$f_s$",
                val: 62.5,
                unit: "$\\mathrm{MHz}$",
                db_unit: "",
                db: false,
                input: true,
            },

            {
                name: "Sub-sampling Ratio",
                symbol: "",
                val: 2,
                unit: "",
                db_unit: "",
                db: false,
                input: true,
            },

            {
                name: "Sampling Interval",
                symbol: "$\\tau_s$",
                val: 32,
                unit: "$\\mathrm{ns}$",
                db_unit: "",
                db: false,
                input: false,
            },

            {
                name: "Carrier Frequency",
                symbol: "",
                val: 1256.875,
                unit: "$\\mathrm{MHz}$",
                db_unit: "",
                db: false,
                input: true,
            },

            {
                name: "Wavelength",
                symbol: "$\\lambda$",
                val: 0.2385,
                unit: "$\\mathrm{m}$",
                db_unit: "",
                db: false,
                input: false,
            },

            {
                name: "Transmit Power",
                symbol: "$P_T$",
                val: 2000,
                unit: "$\\mathrm{W}$",
                db_unit: "$\\mathrm{dB}$",
                db: false,
                input: true,
            },

            {
                name: "Tx Antenna Gain",
                symbol: "$G_T$",
                val: 12.5,
                unit: "",
                db_unit: "$\\mathrm{dBi}$",
                db: true,
                input: true,
            },

            {
                name: "Rx Antenna Gain",
                symbol: "$G_R$",
                val: 5.5,
                unit: "",
                db_unit: "$\\mathrm{dBi}$",
                db: true,
                input: true,
            },

            {
                name: "RF Receiver Gain",
                symbol: "$G_{AMP}$",
                val: 64.5,
                unit: "",
                db_unit: "$\\mathrm{dB}$",
                db: true,
                input: true,
            },

            {
                name: "Receiver Noise Figure",
                symbol: "$F$",
                val: 4.5,
                unit: "",
                db_unit: "$\\mathrm{dB}$",
                db: true,
                input: true,
            },

            {
                name: "SAW Bandwidth",
                symbol: "$BW_{SAW}$",
                val: 10.59,
                unit: "$\\mathrm{MHz}$",
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
                symbol: "$PRF$",
                val: 135.9989,
                unit: "$\\mathrm{\\mu s}$",
                db_unit: "",
                db: false,
                input: false,
            },


        ]
    }

    generateTable2("radar-parameters-table", radar_parameters)

    document.getElementById("Carrier Frequency").addEventListener("input", function (e) {
        e.preventDefault(); 

        var fc = document.getElementById("Carrier Frequency").value;
        var wavelength = 299792458.0 / (fc * 1e6);

        document.getElementById("Wavelength").innerHTML = wavelength.toFixed(4);
        
    });

    document.getElementById("Pulse Repetition Frequency").addEventListener("input", function (e) {
        e.preventDefault(); 

        var prf = document.getElementById("Pulse Repetition Frequency").value;
        var pri = 1000000 / prf;

        document.getElementById("Pulse Repetition Interval").innerHTML = pri.toFixed(4);
        
    });

</script>

# Embedded Processing Gains

<form id="epg-form">
  <table id='embedded-gains-table'>
    <thead>
        <tr></tr>
    </thead>
    <tbody></tbody>
  </table>
</form>


<script>

    embedded_gains = {
        headers: [
            "Parameter",
            "Symbol",
            "Linear",
            "unit",
            "Log",
            "unit",
        ],

        fields: [
            {
                name: "ADC Load Impedance",
                symbol: "$ZA$",
                val: 50,
                unit: "$\\mathrm{ohm}$",
                db_unit: "",
                db: false,
                input: true,
            },

            {
                name: "ADC Transfer Function",
                symbol: "$GADC$",
                val: 8192,
                unit: "$\\mathrm{LSBs/V}$",
                db_unit: "",
                db: false,
                input: true,
            },

            {
                name: "ADC Gain",
                symbol: "$G_{ADC}$",
                val: 3.3554432e+9,
                unit: "",
                db_unit: "$\\mathrm{dB}$",
                db: false,
                input: false,
            },

            {
                name: "Matched Filter Bandwidth",
                symbol: "$BW_{MF}$",
                val: 0.9784,
                unit: "$\\mathrm{MHz}$",
                db_unit: "",
                db: false,
                input: true,
            },
        ]
    }

    generateTable2("embedded-gains-table", embedded_gains)

    var za = 50;
    var gadc = 8192;

    document.getElementById("ADC Load Impedance").addEventListener("input", function (e) {
        e.preventDefault(); 

        za = document.getElementById("ADC Load Impedance").value;
        adc_gain = za * gadc * gadc;

        document.getElementById("ADC Gain").innerHTML = adc_gain.toExponential();
    });

    document.getElementById("ADC Transfer Function").addEventListener("input", function (e) {
        e.preventDefault(); 

        gadc = document.getElementById("ADC Transfer Function").value;
        adc_gain = za * gadc * gadc;

        document.getElementById("ADC Gain").innerHTML = adc_gain.toExponential();
    });

</script>

# Signal Processing Gains

<form id="spg-form">
  <table id='sigpro-gains-table'>
    <thead>
        <tr></tr>
    </thead>
    <tbody></tbody>
  </table>
</form>


<script>

    sigpro_gains = {
        headers: [
            "Parameter",
            "Symbol",
            "Linear",
            "unit",
            "Log",
            "unit",
        ],

        fields: [
            {
                name: "FFT Length",
                symbol: "$N_{FFT}$",
                val: 2048,
                unit: "",
                db_unit: "$\\mathrm{dB}$",
                db: false,
                input: true,
            },

            {
                name: "FFT Window Loss",
                symbol: "$k$",
                val: 1.34,
                unit: "",
                db_unit: "$\\mathrm{dB}$",
                db: true,
                input: true,
            },

            {
                name: "FFT Gain",
                symbol: "$G_{ADC}$",
                val: 1504.28,
                unit: "",
                db_unit: "$\\mathrm{dB}$",
                db: false,
                input: false,
            },

            {
                name: "Receiver Azimuth Elements",
                symbol: "$N_{rec_azi}$",
                val: 4,
                unit: "",
                db_unit: "",
                db: false,
                input: false,
            },

            {
                name: "Receiver Elevation Elements",
                symbol: "$N_{rec_ele}$",
                val: 16,
                unit: "",
                db_unit: "",
                db: false,
                input: false,
            },

            {
                name: "Total Receiver Elements",
                symbol: "$N_{rec}$",
                val: 64,
                unit: "",
                db_unit: "",
                db: false,
                input: false,
            },

            {
                name: "Beam Forming Gain",
                symbol: "$N_{rec}$",
                val: 64,
                unit: "",
                db_unit: "$\\mathrm{dB}$",
                db: false,
                input: false,
            },
        ]
    }

    generateTable2("sigpro-gains-table", sigpro_gains)

    // var za = 50;
    // var gadc = 8192;

    // document.getElementById("ADC Load Impedance").addEventListener("input", function (e) {
    //     e.preventDefault(); 

    //     za = document.getElementById("ADC Load Impedance").value;
    //     adc_gain = za * gadc * gadc;

    //     document.getElementById("ADC Gain").innerHTML = adc_gain.toExponential();
    // });

    // document.getElementById("ADC Transfer Function").addEventListener("input", function (e) {
    //     e.preventDefault(); 

    //     gadc = document.getElementById("ADC Transfer Function").value;
    //     adc_gain = za * gadc * gadc;

    //     document.getElementById("ADC Gain").innerHTML = adc_gain.toExponential();
    // });

</script>

# Power Budget


<form id="pb-form">
  <table id='power-budget-table'>
    <thead>
        <tr></tr>
    </thead>
    <tbody></tbody>
  </table>
</form>


<script>

    power_budget = {
        headers: [
            "Parameter",
            "Symbol",
            "Linear",
            "unit",
            "Log",
            "unit",
        ],

        fields: [
            {
                name: "Transmitter Antenna",
                symbol: "",
                val: "",
                unit: "",
                db_unit: "",
                db: false,
                input: false,
            },

            {
                name: "Output Transmitted Power",
                symbol: "$P_{T_{tx}}$",
                val: 45.5,
                unit: "$\\mathrm{W}$",
                db_unit: "$\\mathrm{dB}$",
                db: true,
                input: false,
            },

            {
                name: "Receiver Antenna",
                symbol: "",
                val: "",
                unit: "",
                db_unit: "",
                db: false,
                input: false,
            },

            {
                name: "Input Received Power",
                symbol: "$P_{T_{tx}}$",
                val: -134.4,
                unit: "$\\mathrm{W}$",
                db_unit: "$\\mathrm{dB}$",
                db: true,
                input: false,
            },

            {
                name: "RF Amplifier",
                symbol: "",
                val: "",
                unit: "",
                db_unit: "",
                db: false,
                input: false,
            },
        ]
    }

    generateTable2("power-budget-table", power_budget)

    // var za = 50;
    // var gadc = 8192;

    var transmit_power = 2000;
    var tx_antenna_gain = 12.5;
    var rx_antenna_gain = 5.5;
    var wavelength = 0.2385;

    var transmit_output_power = 0.0;

    document.getElementById("Transmit Power").addEventListener("input", function (e) {
        e.preventDefault(); 

        transmit_power = document.getElementById("Transmit Power").value;
        transmit_output_power = 10*Math.log10(transmit_power) + tx_antenna_gain;



        document.getElementById("Output Transmitted Power").innerHTML = transmit_output_power.toFixed(2);
    });

    document.getElementById("Tx Antenna Gain").addEventListener("input", function (e) {
        e.preventDefault(); 

        tx_antenna_gain = document.getElementById("Tx Antenna Gain").value;
        transmit_output_power = 10*Math.log10(transmit_power) + tx_antenna_gain;

        document.getElementById("Output Transmitted Power").innerHTML = transmit_output_power.toFixed(2);
    });

    transmit_power = document.getElementById("Transmit Power").value;
    tx_gain = document.getElementById("Tx Antenna Gain").value;
    rx_gain = document.getElementById("Rx Antenna Gain").value;
    range = document.getElementById("Range").value;
    //wavelength = document.getElementById("Wavelength").value;
    rcs = document.getElementById("RCS").value;
    losses = document.getElementById("Atmospheric Loss").value;

    function input_received_power() {
        var received_power = transmit_power * Math.pow(10, tx_gain / 10) * Math.pow(10, rx_gain / 10) * wavelength * wavelength * rcs / (Math.pow(4*Math.PI,3) * Math.pow(range,4)*Math.pow(10,losses/10));
        document.getElementById("Input Received Power").innerHTML = (10*Math.log10(received_power)).toFixed(2);
    }

    input_received_power();


</script>