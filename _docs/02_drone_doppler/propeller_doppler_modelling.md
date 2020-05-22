---
title: Propeller Doppler Modelling
category: Doppler Characteristics
order: 2
---
---

# Micro-Doppler of Rotating Point Reflector

<p align="center">
<img src="/images/rotating_point.png"/>
</p>

Consider a radar at position A observing a point reflector, P, which is rotating about the point C, as shown in Figure \ref{fig:rotating_point}. The distance between the centre of rotation and the point reflector is L, representing the length of the propeller. The distance between the radar and the centre of rotation is R, and for simplicity the line of sight is along the $y$ axis and on the same plane as the plane of rotation, while the rotation is measured from the $x$ axis. 

The distance between the receiver and the reflector, $r(t)$, is a function of time as the point rotates about the centre of rotation and can be determined using the cosine rule as:



$$
\begin{align}
r(t) &= \sqrt{R^2+L^2-2RL\cos\left(\frac{\pi}{2}+\theta(t)\right)}\nonumber\\
     &= \sqrt{R^2+L^2+2RL\sin\left(\theta(t)\right)}
\end{align}
$$

    


For $L\<<R$, the range can be simplified to

\begin{equation}
    r \approx R + L\sin\left(\theta(t)\right)
\end{equation}

Since the reflector is rotating about the centre of rotation with an angular velocity, $\omega_r$, $\theta = \omega_r t$ and the range to the reflector becomes:

\begin{equation}
    r \approx R + L\sin\left(\omega_r t\right)
\end{equation}

The received signal from the reflector with a simple sinusoidal pulse is 

$$
\begin{align}
\label{eqn:received}
    s_r(t) &= A(t)\mathrm{e}^{i\omega_ct}\mathrm{e}^{2ikr(t)}\nonumber\\
        &= A(t)\mathrm{e}^{i\omega_ct}\mathrm{e}^{2ik\left(R+L\sin\left(\omega_r t\right)\right)}
\end{align}
$$

The Doppler spectrum is given by taking the Fourier transform of the modulation signal:

\begin{equation}
\label{eqn:doppler}
    F(\omega) = \int\limits_{-\infty}^{\infty}\mathrm{e}^{2ik\left(R+L\sin\left(\omega_r t\right)\right)}\mathrm{e}^{-i\omega t}dt
\end{equation}

The sine term can be written in terms of exponentials as

\begin{equation}
\label{eqn:sine}
    \sin\left(\omega_r t\right) = \frac{\mathrm{e}^{i\omega_r t} - \mathrm{e}^{-i\omega_rt}}{2i}
\end{equation}

Substituting \ref{eqn:sine} into \ref{eqn:doppler} and splitting the $R$ term from the $L$ term gives:

\begin{equation}
    F(\omega) = \mathrm{e}^{2ikR}\int\limits_{-\infty}^{\infty}\mathrm{e}^{k
    L\left(\mathrm{e}^{i\omega_r t} - \mathrm{e}^{-i\omega_rt}\right)}\mathrm{e}^{-i\omega t}dt
\end{equation}

The exponential term within the integral can be expanded as a series of Bessel functions using the identity

\begin{equation}
    \sum\limits_{n=-\infty}^{\infty}J_n(x)t^n = \mathrm{e}^{\frac{x}{2}\left(t-\frac{1}{t}\right)}
\end{equation}

Let $t=\mathrm{e}^{i\omega_r t}$ and $x=2kL$, then 

$$
      
    \begin{align}
    
        F(\omega)&=\mathrm{e}^{2ikR}\int\limits_{-\infty}^{\infty}\sum\limits_{n=-\infty}^{\infty}J_n(2kL)\mathrm{e}^{i\omega_r nt}\mathrm{e}^{-i\omega t}dt\nonumber\\
        &=\mathrm{e}^{2ikR}\sum\limits_{n=-\infty}^{\infty}J_n(2kL)\int\limits_{-\infty}^{\infty}\mathrm{e}^{i\left(\omega_r nt - \omega\right) t}dt\nonumber\\
        &=\sum\limits_{n=-\infty}^{\infty}J_n(2kL)\mathrm{e}^{2ikR}\delta\left(\omega_r n-\omega\right)\label{eqn:harmonics}\\
    \end{align}
$$

Equation \eqref{eqn:harmonics} shows that the Doppler spectrum is a series of delta function peaks located at integer intervals of $\omega_r$ in the spectrum, known as harmonics, and with an amplitude given by a combination of the term $\mathrm{e}^{2ikR}$ and the first order Bessel function $J_n(2kL)$. 

Figure (something) shows a plot of the spectrum given by equation \ref{eqn:harmonics}, where the wavelength is $0.15m$ and the blade length is also $0.15m$, the distance $R=1 km$, and rotation rate $\omega_r=180 Hz$. When $n=0$, the delta function is located at $\omega=0$, giving rise to a peak at zero frequency in the spectrum. The first fundamental on each side of the this main peak are located at $\pm\omega_r$, the rotation rate of the propellers, when $n=\pm1$. For a moving drone, an additional radial velocity term is including, causing the resulting spectrum to be shifted and centred on the Doppler frequency corresponding to the velocity of the drone.

<p align="center">
<img src="/images/harmonics.png"/>
</p>

It can be shown that a finite time Fourier transform of an exponential function over a time period between $\frac{-T}{2}$ and $\frac{T}{2}$, where $T$ is the period of observation, is a sinc function given by

\begin{equation}
    \int\limits_{-\frac{T}{2}}^{\frac{T}{2}}\mathrm{e}^{i\left(\omega_r n-\omega\right)t}dt = T sinc\left(\left(\omega_r n-\omega\right)\frac{T}{2}\right)
\end{equation}

The Doppler spectrum of the time-domain signal in equation (something) then becomes:

\begin{equation}
    F(\omega) = \sum\limits_{n=-\infty}^{\infty}J_n\left(2kL\right)\mathrm{e}^{2ikR}T sinc\left(\left(\omega_r n-\omega\right)\frac{T}{2}\right)
\end{equation}

This describes a series of shifted sinc functions, rather than delta functions, with the peaks separated by integer intervals of the rotation frequency, $\omega_r$. Each sinc function peaks when $\omega = n\omega_r$, and the nulls on each side of the nth peak is found when $\omega = n\omega_r \pm \frac{2\pi}{T}$. Therefore, the null-to-null width the nth peak is given by

\begin{equation}
    w_n = \frac{4\pi}{T}
\end{equation}

where $w_n$ is an angular frequency. This shows that the harmonic peak width is inversely proportional to integration time, and this is also observed in the real data.