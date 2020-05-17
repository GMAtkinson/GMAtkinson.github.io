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

| Parameter  | Value      | Unit    |
| ---        | ---        | ---     |
| $T$        | $133$      | $\mathrm{\mu} \mathrm{s}$ |
| $\tau$     | $1$        | $\mathrm{\mu} \mathrm{s}$ |
| $R_{max}$  | $19836.27$ | $\mathrm{m}$     |

With a pulse repetition time of $T=133$ $\mathrm{\mu}\mathrm{s}$ and a pulse duration of $\tau=1$ $\mathrm{\mu}\mathrm{s}$, the Gamekeeper radar has a theoretical maximum unambiguous range of $R_{max}=19836.27$ $\mathrm{m}$. However, the practical maximum range of the radar is determined by the transmit power and the target SNR required for a detection. 

# Range Resolution

Since the Gamekeeper radar is a monostatic system transmitting a simple pulsed waveform, the range resolution is given by

\begin{equation}
    \Delta R = \frac{c}{2B}
\end{equation}

where $B$ is the bandwidth of the transmitted pulse and $c$ is the speed of light. 

| Parameter  | Value      | Unit    |
| ---        | ---        | ---     |
| $B$        | 2          | $\mathrm{MHz}$ |
| $\Delta R$ | 74.95      | $\mathrm{m}$ |


# Range Estimation

