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

| Parameter  | Value      | Unit    |
| ---        | ---        | ---     |
| $PRF$      | $7500$     | $\mathrm{Hz}$    |
| $N_{fft}$  | $2048$     |         |
| $\Delta f$  | $3.66$     | $\mathrm{Hz}$     |
| $\Delta v_{r}$ | $0.274$ | $\mathrm{m/s}$ |

A single frame with 2048 pulses results in a Doppler resolution of $3.66\;\mathrm{Hz}$.