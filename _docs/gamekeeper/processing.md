---
layout: page
title: Processing Stages
category: Gamekeeper Radar
order: 2
---
---

<div class="mermaid">
graph LR;
    A[Raw Data]-->B;
    B[Range Detection]-->C;
    C[Doppler]-->D;
    D[Beamforming];
    click A callback_raw_data
    click B callback_range_detection
    click C callback_doppler
    click D callback_beamforming
</div>