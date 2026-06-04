---
title: Scientific Research Codes
toc: true
---

## Seismic Data Fetching and Processing

### Data Request Tools

- [FDSN Web Services](https://www.fdsn.org/webservices) |
  [A note in Chinese](https://blog.seisman.info/web-service-clients)
- [IRIS Data Management Center (DMC)](https://ds.iris.edu/ds/nodes/dmc/)
    - [ROVER](https://EarthScope.github.io/rover): A command line tool to robustly
      retrieve geophysical timeseries data from data centers
    - [BREQ_FAST](https://ds.iris.edu/ds/nodes/dmc/manuals/breq_fast) |
      [notes in Chinese](https://blog.seisman.info/tags/breq_fast):
      Seismic data request by sending email
    - [IRIS Wilber 3](https://ds.iris.edu/wilber3/find_event) |
      [A note in Chinese](https://blog.seisman.info/wilber3):
      A web GUI to request waveform data of individual seismic events
    - [jweed](https://ds.iris.edu/ds/nodes/dmc/software/downloads/jweed):
      Data request client written in Java
- [IRIS-DMC: Web Services](https://service.iris.edu):
  - [clients](https://service.iris.edu/clients/)
    - [Web Service Fetch scripts](https://github.com/EarthScope/fetch-scripts)
      [A note in Chinese](https://blog.seisman.info/web-service-fetch-scripts)
    - [MATLAB data access](https://ds.iris.edu/ds/nodes/dmc/software/downloads/irisFetch.m/)
  - [FDSNWS](https://service.iris.edu/fdsnws/)
  - [IRISWS](https://service.iris.edu/irisws/)
  - [PH5WS](https://service.iris.edu/ph5ws/) |
    [Tutorials](https://ds.iris.edu/ds/nodes/dmc/tutorials/accessing-ph5-archive-with-fetchdata/) |
    [wiki](https://github.com/PIC-IRIS/PH5/wiki)
- [SOD](http://www.seis.sc.edu/sod) |
  [Tutorial (in Chinese)](https://seismo-learn.org/software/sod/) |
  [Recipes](https://github.com/seismo-learn/SOD-recipes):
  The best seismic data request tool
- [ObsPy](https://github.com/obspy/obspy/wiki):
  Data download, processing and visualization software written in Python
- [SAC](https://www.iris.edu/ds/nodes/dmc/forms/sac/) |
  [Chinese Manual](https://seisman.github.io/SAC_Docs_zh/) |
  [English Manual](https://ds.iris.edu/files/sac-manual/) |
  [youtube](https://www.youtube.com/watch?v=zZeUvHkOOAM&list=PLD4D607C2FA317E6D&index=147) |
  [notes in Chinese](https://blog.seisman.info/conversion-of-different-sac-formats):
  The most commonly used seismic data processing and plotting software
- [FnetPy](https://github.com/seisman/FnetPy):
  A Python package to request seismic waveform data from F-net
- [HinetPy](https://seisman.github.io/HinetPy/):
  Request and process Hi-net data, written in Python
- [obspyDMT](https://github.com/kasra-hosseini/obspyDMT): A Python Toolbox
  for Retrieving, Processing and Management of Seismological Datasets
- [SeisIO.jl](https://github.com/jpjones76/SeisIO.jl):
  Julia language support for geophysical time series data
- [StrongMotion Fetch](https://github.com/usgs/strongmotionfetch):
  Download and/or process strong motion data from various networks

### Seismic Data Format Conversion

- [ObsPy](https://github.com/obspy/obspy) |
  [Waveform Import/Export Plug-ins](https://docs.obspy.org/packages/index.html) |
  [Supported Formats](https://docs.obspy.org/packages/autogen/obspy.core.stream.read.html#obspy.core.stream.read):
  Data download, processing and visualization software written in Python
- [SAC](https://www.iris.edu/ds/nodes/dmc/forms/sac/) |
  [Chinese Manual](https://seisman.github.io/SAC_Docs_zh/) |
  [English Manual](https://ds.iris.edu/files/sac-manual/) |
  [youtube](https://www.youtube.com/watch?v=zZeUvHkOOAM&list=PLD4D607C2FA317E6D&index=147) |
  [notes in Chinese](https://blog.seisman.info/conversion-of-different-sac-formats):
  The most commonly used seismic data processing and plotting software
- [CubeTools](https://digos.eu/seismology/#SeismicDownloads/) |
  [cube_conversion](https://github.com/uafgeotools/cube_conversion):
  Data Format conversion software for CUBE data
- [dataselect](https://github.com/EarthScope/dataselect):
  Selection and sorting for data in miniSEED format
- [GIPPtools](https://www.gfz-potsdam.de/en/section/geophysical-imaging/infrastructure/geophysical-instrument-pool-potsdam-gipp/software/gipptools):
  A collection of software utilities for initial pre-processing of recorded data
- [libmseed](https://github.com/EarthScope/libmseed): A miniSEED library that
  provides a framework for manipulation of SEED data records
- [msmod](https://github.com/EarthScope/msmod): A small program
  to modify miniSEED header values
- [mseed2sac](https://github.com/EarthScope/mseed2sac):
  Convert miniSEED format to SAC format
- [sac2mseed](https://github.com/EarthScope/sac2mseed): Convert SAC format to minniSEED format
- [win32tools](http://www.hinet.bosai.go.jp/REGS/manual/dlDialogue.php?r=win32tools):
  Convert WIN32 format used by Hi-net, to SAC format
- [rdseed](https://github.com/EarthScope-legacy/rdseed) |
  [IRIS](https://ds.iris.edu/pub/programs) |
  [notes in Chinese](https://blog.seisman.info/tags/SEED):
  Convert seismic data from SEED format and other formats

### Seismic Data Processing

- [SAC](https://www.iris.edu/ds/nodes/dmc/forms/sac/) |
  [Chinese Manual](https://seisman.github.io/SAC_Docs_zh/) |
  [English Manual](https://ds.iris.edu/files/sac-manual/) |
  [youtube](https://www.youtube.com/watch?v=zZeUvHkOOAM&list=PLD4D607C2FA317E6D&index=147) |
  [notes in Chinese](https://blog.seisman.info/conversion-of-different-sac-formats):
  The most commonly used seismic data processing and plotting software
- [ObsPy](https://github.com/obspy/obspy/wiki):
  Data download, processing and visualization software written in Python
- [CPS330](http://www.eas.slu.edu/eqc/eqccps.html) |
  [A tutorial (in Chinese)](https://seismo-learn.org/software/cps/):
  Collection of programs for calculating theorectical seismogram, receiver function,
  surface wave dispersion curve et al.
- [Geopsy](http://www.geopsy.org/download.php): An open source software for geophysical
  research and application written in C++
- [GISMO](http://geoscience-community-codes.github.io/GISMO/):
  Data download, processing and visualization software written in Matlab
- [hinet_decon](https://github.com/tktmyd/hinet_decon): Deconvolve Hi-net velocity
  record by its seismometer response by using inverse filtering technique
- [SeisIO.jl](https://github.com/jpjones76/SeisIO.jl):
  Julia language support for geophysical time series data

----

## Plotting and Visualization

### Plotting

- [Generic Mapping Tools (GMT)](https://www.generic-mapping-tools.org/):
  The most popular mapping tools in Earth Science
    - [GMT China Community](https://gmt-china.org) | [Reference Manual (in Chinese)](https://docs.gmt-china.org/latest/)
    - [try-GMT](https://github.com/GenericMappingTools/try-gmt):
      Try `GMT`, `PyGMT`, and `GMT.jl` online! All in one place!
    - [pssac](http://www.eas.slu.edu/People/LZhu/home.html) |
      [notes (in Chinese)](https://blog.seisman.info/tags/pssac) |
      [pssac2](https://blog.seisman.info/tags/pssac2):
      GMT4-style SAC trace plotting
- [PyGMT](https://www.pygmt.org): Python interface of GMT (still under development)
- [GMT.jl](https://github.com/GenericMappingTools/GMT.jl): GMT Library Wrapper for Julia
- [matplotlib](https://matplotlib.org/): A comprehensive library for creating
  static, animated, and interactive visualizations in Python
- [ObsPy](https://github.com/obspy/obspy): Data download, processing and
  visualization software written in Python
- [obspy.imaging.scripts.mopad](https://docs.obspy.org/packages/autogen/obspy.imaging.scripts.mopad.html):
  MoPaD command line utility
- [MoPad](http://www.larskrieger.de/mopad/) |
  [A note in Chinese](https://blog.seisman.info/mopad):
  Moment tensor Plotting and Decomposition
- [3D Focal Mechanisms](https://www.usgs.gov/node/279384):
  View earthquake focal mechanism symbols three dimensionally
- [EMC-DesktopTools](https://ds.iris.edu/ds/products/emc-desktoptools/)
  - [EMC-ParaView](https://github.com/EarthScope/EMC-ParaView): A set of Python
    programmable filters/sources to allow ParaView open-source, multi-platform
    data analysis and visualization application to display EMC netCDF/GeoCSV models
    along with other auxiliary Earth data
- [EMC visualization tools](https://ds.iris.edu/dms/products/emc/horizontalSlice.html)
- [SeisTomoPy](https://github.com/stephaniedurand/SeisTomoPy):
  Visulization of 3D tomography models and calculate traveltime in 3D model
- [SubMachine](https://www.earth.ox.ac.uk/~smachine/cgi/index.php):
  Web-based tools for the interactive visualisation, analysis, and quantitative
  comparison of global-scale, volumetric (3-D) data sets of the subsurface
- [Tomoeye](http://www.iearth.edu.au/codes/Tomoeye): A set of programs for
  tomographic model visualization written in MatLab 6.1 script

### Visualization

- [MATLAB for Analyzing and Visualizing Geospatial Data](https://ww2.mathworks.cn/matlabcentral/fileexchange/49813-matlab-for-analyzing-and-visualizing-geospatial-data)
- [Ghostscript](https://www.ghostscript.com/) |
  [Releases](https://github.com/ArtifexSoftware/ghostpdl-downloads/releases):
  An interpreter for the PostScript language and PDF files

----

## Traveltime and Ray Tracing

- [TauP](http://www.seis.sc.edu/taup/) |
  [Tutorials (in Chinese)](https://seismo-learn.org/software/taup/):
  Calculate traveltimes, ray parameters, ray paths, reflection points,
  piercing points of seismic phases, supporting custom Earth models
- [obspy.taup](https://docs.obspy.org/packages/obspy.taup.html): TauP written in Python
- [ANISOtime](http://www-solid.eps.s.u-tokyo.ac.jp/~dsm/anisotime.html) |
  [GitHub](https://github.com/UT-GlobalSeismology/anisotime):
  Traveltime calculation for transversely isotropic (TI) spherically symmetric models
- [Cake](https://pyrocko.org): Traveltime calculation software, written in Python.
- [fast_methods](https://github.com/jvgomez/fast_methods): N-Dimensional Fast Methodswritten in C++
- [FM3D](http://rses.anu.edu.au/seismology/soft/fmmcode) |
  [iEarth](http://www.iearth.edu.au/codes/3Dfastmarching/):
   3D traveltime calculation using Fast Marching Method in spherical coordinates written in Fortran
- [Lapo Boschi: Software](http://hestia.lgs.jussieu.fr/~boschil/downloads.html) |
  [SPICE](http://www.spice-rtn.org/library/software/traceswani/softwarerelease.2006-11-16.2126060784.html):
  Surface Wave Ray Tracing with Azimuthal Anisotropy
- [pykonal](https://github.com/malcolmw/pykonal): 2D/3D traveltime calculator
  using Fast Marching Method for eikonal equation in Cartesian and spherical coordinates
- [pySeismicFMM](https://github.com/gozwei/pySeismicFMM):
  2D/3D travel time calculation in based on the Fast Marching Method written in Python
- [pyekfmm](https://github.com/aaspip/pyekfmm): A python package for 3D fast-marching-based traveltime calculation and its applications in seismology
- [RSTT](https://www.sandia.gov/rstt/): Regional Seismic Travel Time
- [scikit-fmm](https://github.com/scikit-fmm/scikit-fmm): Fast marching method
  in Cartesian coordinates written in Python
- **iaspei-tau** traveltime table package
    - Arthur Snoke's version at [IASPEI](http://www.iaspei.org/downloads) or
      [IRIS](https://seiscode.iris.washington.edu/projects/iaspei-tau):
      Traveltime calculator for iasp91 and AK135 models
    - B.L.N. Kennett and Ray Buland's [version](http://rses.anu.edu.au/seismology/soft/ttsoft.html) |
      [A revised version](https://github.com/seisman/TravelTimeEllipcityCorrection):
      Calculation of travel times and ellipticity corrections for iasp91 and AK135 models
    - George Helffrich's [version](https://members.elsi.jp/~george/sac-bugs.html#ttimes):
      Traveltime calculator for iasp91, AK135, PREM etc.
- [EllipticiPy](https://github.com/StuartJRussell/EllipticiPy): Python package for the calculation of ellipticity corrections for seismic waves.

----

## Synthetic Seismograms

### Ray Theory for 1D Layered Earth

- [aser](http://www.eas.slu.edu/People/LZhu/home.html):
  Calculate synthetic seismograms based on Generalized Ray Theory
- Asymptotic ray theory in [CPS330](http://www.eas.slu.edu/eqc/eqccps.html) |
  [A tutorial (in Chinese)](https://seismo-learn.org/software/cps/):
  Collection of programs for calculating theorectical seismogram, receiver function,
  surface wave dispersion curve et al.
- [CRT](http://seis.karlov.mff.cuni.cz/software/sw3dcd21/crt/crt.htm):
  Complete ray tracing subroutine package
- Generalized ray in [CPS330](http://www.eas.slu.edu/eqc/eqccps.html) |
  [A tutorial (in Chinese)](https://seismo-learn.org/software/cps/):
  Collection of programs for calculating theorectical seismogram, receiver function,
  surface wave dispersion curve et al.
- [Ray theory](http://www.spice-rtn.org/library/software/Raytheory.html):
  Ray-theoretical approach to the calculation of synthetic seismograms in global Earth models
- WKBJ method in [seisan](http://seisan.info) at
  [Seismology at GEUS: Seismological software](http://seis.geus.net)
- [RaySum](https://home.cc.umanitoba.ca/~frederik/Software/): Ray-theoretical modelling of teleseismic waves in dipping, anisotropic structures
- [PyRaySum](https://github.com/paudetseis/PyRaysum): https://github.com/paudetseis/PyRaysum

### Reflectivity/Wavenumber Integration for 1D Layered Earth

- [fk](http://www.eas.slu.edu/People/LZhu/home.html) |
  [A tutorial (in Chinese)](https://seismo-learn.org/software/fk/):
  Calculate synthetic seismograms in layered isotropic models using frequency-wavenumber method
- Discrete wavenumber method in [seisan](http://seisan.info) at
  [Seismology at GEUS: Seismological software](http://seis.geus.net)
- [grtm](https://github.com/YunyiQian/grtm): The generalized reflection and
  transmission coefficient method
- [grtm (VTI media)](https://github.com/Xindingfang/grtm): Calculate synthetic seismograms
  in stratified vertically transversely isotropic media using the generalized
  reflection and transmission coefficient method
- [multitel3](https://github.com/YunyiQian/multitel3): A hybrid method of ray
  theory and haskell matrix to calculate teleseismic body wave Green's functions
  in RTZ components
- [QSEIS](https://www.gfz-potsdam.de/en/section/physics-of-earthquakes-and-volcanoes/infrastructure/tool-development-lab/):
  Calculating synthetic seismograms based on a layered viscoelastic half-space earth model
- [ANIMATIVITY](https://github.com/RUseismology/ANIMATIVITY):
  Reflectivity Algorithm for body Wave propagation through layered anisotropic media
  written in MATLAB
- [Reflectivity method](http://www.spice-rtn.org/library/software/ERZSOL3.html):
  Calculating the response of a layered uniform solid layers to excitation by
  a point moment tensor source using the reflectivity method
- [rf_respknt](https://github.com/Chuanming-Liu/rf_respknt): Reflection matrix
  approach to computing the seismic response of a cylindrically symmetric medium
- [RMATRIX](http://seis.karlov.mff.cuni.cz/software/sw3dcd22/rmatrix/rmatrix.htm):
  Calculate the frequency-dependent transmission coefficients written in Fortran
- [Syn_seis](https://github.com/akuhara/Syn_seis): Compute synthetic seismograms
  for an incidence P or SV wave to 1-D layered structure
- [telewavesim](https://paudetseis.github.io/Telewavesim/): Calculate teleseismic
  body-wave synthetics using the matrix propagator method written in Python and Fortran
- Wavenumber integration method in [CPS330](http://www.eas.slu.edu/eqc/eqccps.html) |
  [Python wrapper: PyLayeredModel](https://github.com/harrymd/PyLayeredModel) |
  [A tutorial (in Chinese)](https://seismo-learn.org/software/cps/):
  Collection of programs for calculating theorectical seismogram, receiver function,
  surface wave dispersion curve et al.

### Modal Summation Method for 1D Layered Earth

- Modal Summation in [CPS330](http://www.eas.slu.edu/eqc/eqccps.html) |
  [A tutorial (in Chinese)](https://seismo-learn.org/software/cps/):
  Collection of programs for calculating theorectical seismogram, receiver function,
  surface wave dispersion curve et al.

### Reflectivity/Wavenumber Integration for 1D Layered Spherical Earth

- [yaseis](https://seiscode.iris.washington.edu/projects/yaseis): Calculate synthetic
  seismograms in spherically layered isotropic models

### Normal Modes Summation for 1D Layered Spherical Earth

- [Mineos](https://github.com/geodynamics/mineos): Computes synthetic seismograms
  in a spherically symmetric non-rotating Earth by summing normal modes
- Colleen Dalton's [Mineos](https://github.com/jbrussell/MINEOS):
  All the tools one should need to compile and run the MINEOS program
  - [Matlab to MINEOS](https://github.com/jbrussell/matlab_to_mineos):
    Wrapper scripts for running MINEOS through MATLAB
  - [MINEOS_synthetics](https://github.com/jbrussell/MINEOS_synthetics):
    Calculate dispersion tables and synthetic seismograms for layered models
    using MINEOS and idagrn6 housed within MATLAB wrappers
- `DISPER80`: Calculation of normal modes, which is a very old fortran code.
- [Generalized Eigenproblem Spectral Collocation](https://github.com/mdenolle/gesc)
- [Normal modes](http://www.spice-rtn.org/library/software/Normal%20Modes.html):
  Normal-mode based computation of seismograms for spherically symmetric Earth models
- [QSSP](https://www.gfz-potsdam.de/en/section/physics-of-earthquakes-and-volcanoes/infrastructure/tool-development-lab/):
  Calculating complete synthetic seismograms of a spherical earth using the normal mode theory
- [specnm](https://gitlab.com/JohKem1/specnm):
  Spectral element normal mode code

### Direct Solution Method for 1D Layered Spherical Earth

- [DSM](http://www-solid.eps.s.u-tokyo.ac.jp/~dsm/software/software.htm) |
  [An updated version](https://www.eri.u-tokyo.ac.jp/people/takeuchi/software/index.html):
  Computing synthetic seismograms in spherically symmetric transversely isotropic
  (TI) media using the Direct Solution Method
- [DGRFN](https://www.usgs.gov/software/direct-greens-function-synthetic-seismograms):
  Calculate synthetic seismograms in a spherically layered model
- [GEMINI](http://www.spice-rtn.org/library/software/GEMINI.html):
  Calculation of synthetic seismograms for global, spherically symmetric media
  based in direct evaluation of Green's functions (The files seem wrong)

### Boundary Element Methods

- [AstroSeis](https://github.com/ytian159/AstroSeis):
  Asteroid seismic wavefield modeling written in MATLAB

### Discontinuous Galerkin Method

- [NEXD](https://github.com/seismology-RUB/NEXD-3D):
  high order simulation of seismic waves using the nodal discontinuous Galerkin method
- [SeisSol](https://github.com/SeisSol/SeisSol): numerical simulation of seismic
  wave phenomena and earthquake dynamics

### Finite Difference Methods

- [SOFI2D](https://www.gpi.kit.edu/english/498.php?tab=%5B243%5D#tabpanel-243) |
  [GitLab](https://git.scc.kit.edu/GPIAG-Software/SOFI2D/) |
  [A note (in Chinese)](https://blog.seisman.info/sofi2d-notes):
  2-D viscoelastic and elastic wave simulations for P- and SV-waves
- [SOFI2D_sh](https://www.gpi.kit.edu/english/498.php?tab=%5B243%5D#tabpanel-243) |
  [GitLab](https://git.scc.kit.edu/GPIAG-Software/SOFI2D_sh):
  2-D viscoelastic and elastic wave simulations for SH-waves
- [SOFI3D](https://www.gpi.kit.edu/english/498.php?tab=%5B243%5D#tabpanel-243) |
  [GitLab](https://git.scc.kit.edu/GPIAG-Software/SOFI3D):
  3-D viscoelastic, elastic, and acoustic wave simulations
- [FD1D](http://www.nuquake.eu/Computer_Codes/1dfd.htm) |
  [1DFD_DS](http://www.spice-rtn.org/library/software/1DFDDS.html) |
  [1DFD_DVS](http://www.spice-rtn.org/library/software/1DFDDVS.html) |
  [1DFD_VS](http://www.spice-rtn.org/library/software/1DFDVS.html):
  1D finite-difference seismic simulation using the displacement-stress (DS),
  displacement-velocity-stress (DVS), and velocity-stress (VS) staggered-grids
- [2DFD_DVS](http://www.nuquake.eu/Computer_Codes/2dfd.htm):
  Computation of seismic wavefields in 2D heterogeneous structures
- [FD](http://seis.karlov.mff.cuni.cz/software/sw3dcd22/fd/fd.htm):
  2-D P-SV elastic second-order finite difference
- [FD2D](http://www.spice-rtn.org/library/software/Fd2d.html):
  A very simple training code for 2D finite difference
- [FD3S](http://www.spice-rtn.org/library/software/FD3S.html):
  3D finite-difference seismic wave simulation in a spherical section
- [FDSim3D](http://www.nuquake.eu/Computer_Codes/3dfd.htm):
  Computation of seismic wavefields in 3D heterogeneous surface geological structures
- [OpenSWPC](https://github.com/tktmyd/OpenSWPC):
  2D/3D finite-difference seismic wave simulation
- [SEISMIC_CPML](https://github.com/geodynamics/seismic_cpml):
  2D/3D finite-difference seismic wave simulation with Convolutional or
  Auxiliary Perfectly Matched Layer (C-PML or ADE-PML) conditions
- [SW4](https://github.com/geodynamics/sw4): 3D finite-difference seismic wave simulation (4th order)

### Finite Element Methods

- [3DFE_GSM](http://www.nuquake.eu/Computer_Codes/request.htm)
- [3DFE_REF](http://www.nuquake.eu/Computer_Codes/request.htm)

### Pseudo-Spectral Methods

- [Ps2D](http://www.spice-rtn.org/library/software/Ps2d.html): A very simple code
  for elastic wave simulation in 2D using a Pseudo-Spectral Fourier method

### Spectral Element Methods

- [SPECFEM1D](https://github.com/geodynamics/specfem1d): A small code that
  allows users to learn how a spectral-element program is written
- [Specfem1d](https://github.com/nqdu/Specfem1d): An implementation of Spectrum Element Method for 1-D wave equation
- [SPECFEM2D](https://github.com/geodynamics/specfem2d): Simulates seismic wave
  propagation in a 2D heterogeneous medium, using spectral element method
  (spherical coordinate system)
- [SPECFEM3D](https://github.com/geodynamics/specfem3d): Simulates seismic wave
  propagation in a 3D heterogeneous medium, using spectral element method
  (Cartesian coordinate system)
- [SPECFEM3D_GLOBE](https://github.com/geodynamics/specfem3d_globe):
  Simulates seismic wave propagation in a 3D heterogeneous medium,
  using spectral element method (spherical coordinate system)
- [AxiSEM](https://github.com/geodynamics/axisem): A parallel spectral-element
  method to solve 3D wave propagation in a sphere with axisymmetric or
  spherically symmetric visco-elastic, acoustic, anisotropic structures
- [AxiSEM3D](https://github.com/AxiSEMunity/AxiSEM3D)
- [Instaseis](http://instaseis.net) | [Brief Introduction in Chinese](https://blog.seisman.info/iris-syngine):
  The Python interface of AxiSEM
- [RegSEM](http://www.quest-itn.org/library/software/regsem.html):
  Simulates seismic wave propagation in a 3D heterogeneous media using spectral
  element method at the regional scale (1 km to 90 degree)
- [2DSPEC](http://www.spice-rtn.org/library/software/2DSPEC.html):
  A parallel/serial 2d spectral element code for wave propagation and rupture dynamics
- [sem2dpack](http://www.spice-rtn.org/library/software/sem2dpack.html):
  A spectral element package for 2D wave propagation and earthquake rupture dynamics

### Hybrid Methods

- FK-SPECFEM2D: [Ping Tong](https://personal.ntu.edu.sg/tongping/index.html)
- Hybrid Methods in [SPECFEM3D](https://github.com/geodynamics/specfem3d):
  The coulping can be found in `specfem3D/couple_with_injection.f90`
  - **FK-SEM**: FK is not an external code, it is now called internally
  - **DSM-SEM** | **AxiSEM-SEM**: within `EXTERNAL_PACKAGES_coupled_with_SPECFEM3D`
- [SEM-DSM-coupling](https://github.com/wenbowu-geo/SEM_DSM_hybrid):
  A hybrid method to efficiently compute teleseismic synthetics with 3D seismic
  strucure at source side (SEM) and 1D strucure outside the source region (DSM)
- [PSV Hybrid Method](http://geophysics.geo.sunysb.edu/wen/resource/index.html) |
  [GitHub](https://github.com/Geolab-USTC/PSV_Hybrid):
  Calculating synthetic seismograms involving two-dimensional localized
  hetergeneous structures based on GRT-FD hybrid method
- [FDFK2D](https://github.com/YoushanLiu/FDFK2D): Efficient two-dimensional teleseismic wavefield hybrid simulation method
  for receiver function analysis

Resources


### Surface waves in 3D structures

- [Couplage](http://www.quest-itn.org/library/software/couplage):
  Modelling of propagation of surface waves in 3D structures by mode coupling method

### Waveform Forward Modelling

- [Yehuda Ben-Zion: Downloads](https://earth.usc.edu/~ybz/):
  Model point/line dislocation in fault zone

----

## Seismic Source

### Earthquake Detection

- [REAL](https://github.com/Dal-mzhang/REAL) |
  [A tutorial](https://www.koushare.com/video/videodetail/14767) (in Chinese):
  **R**apid **E**arthquake **A**ssociation and **L**ocation written in C
- [S-SNAP](https://github.com/tanfengzhou/S-SNAP1.1):
  **S**eismicity-**S**canning based on **N**avigated **A**utomatic **P**hase-Picking
- [Match&Locate](https://github.com/Dal-mzhang/MatchLocate2): Detect and locate
  small events from continuous seismic waveforms using templates
- [GPU-MatchLocate1.0](https://github.com/MinLiu19/GPU-MatchLocate1.0):
  An improved match and locate method using GPU
- [FastMatchedFilter](https://github.com/beridel/fast_matched_filter):
  An efficient seismic matched-filter search for both CPU and GPU architectures
- [dynamic_earthquake_triggering](https://github.com/yunndlalala/dynamic_earthquake_triggering):
  Detecting dynamic earthquake triggering written in Python
- [FAST](https://github.com/stanford-futuredata/FAST): End-to-end earthquake
  detection pipeline via efficient time series similarity search
- [EQcorrscan](https://github.com/eqcorrscan/EQcorrscan): Detection and analysis
  of repeating and near-repeating earthquakes written in Python
- [RT-EQcorrscan](https://github.com/eqcorrscan/RT_EQcorrscan): Real-time
  implementation of EQcorrscan method
- [Harmonic tremor extraction and transient signal detection](https://gitup.uni-potsdam.de/zali/harmonic-tremor-extraction-and-transient-signal-detection)
- [MESS](https://github.com/YijianZhou/MESS): A Matched filter earthquake detector with GPU acceleration
- [PAL](https://github.com/YijianZhou/PAL):
  An earthquake detection and location architecture including phase **P**icking,
  phase **A**ssociation, event **L**ocation.
- [REDPy](https://github.com/ahotovec/REDPy): Repeating Earthquake Detector written in Python

### Earthquake Location

- [GrowClust](https://github.com/dttrugman/GrowClust) | [GrowClust3D.jl](https://github.com/dttrugman/GrowClust3D.jl):
  Relative relocation of earthquake hypocenters based on waveform cross-correlation data
- [HypoDD](https://www.ldeo.columbia.edu/~felixw/hypoDD.html) |
  [A tutorial](http://geophysics.eas.gatech.edu/people/cwu/teaching/hypoDD/hypoDD.html) |
  [hypoDDpy](https://github.com/krischer/hypoDDpy):
  Double-difference earthquake location
- [HypoRelocate](https://github.com/sun1022/hypoRelocate):
  High-resolution earthquake relocation method
- [HYPOINVERSE2000](https://www.usgs.gov/software/hypoinverse-earthquake-location):
  Locate earthquakes and determine magnitudes in a local or regional seismic network
- [AmplitudeSourceLocation](https://github.com/mogiso/AmplitudeSourceLocation):
  Estimate source locations of seismic events written in Fortran
- [NonLinLoc](https://github.com/alomax/NonLinLoc)
  Probabilistic, non-linear, global-search earthquake location in 3D Media
- [location-pt](https://gitlab.com/dettmer-jan/location-pt): Multiple earthquake
  location via parallel tempering and principal component sampling
- [PhaseLink](https://github.com/interseismic/PhaseLink):
  A deep learning approach to seismic phase association
- [Velest](https://seg.ethz.ch/software/velest.html) |
  A modified version in [REAL](https://github.com/Dal-mzhang/REAL):
  1-D inversion of velocities and hypocenter locations

### Focal Mechanism

- [gCAP](http://www.eas.slu.edu/People/LZhu/home.html) |
  [Oh My CAP](https://github.com/wangliang1989/oh-my-cap) |
  [Chinese note](https://blog.seisman.info/gcap-install):
  Focal mechanism inversion using cut and paste method
- [CAPjoint](https://github.com/bqpseismology/CAPjoint) |
  [CAPjoint examples](https://github.com/wangliang1989/capjoint):
  Joint Inversion of Moderate Earthquake Source Parameters
- [gCAPjoint](https://github.com/bqpseismology/gCAPjoint):
  Full Moment Tensor Inversion of Moderately Strong Earthquakes with Local and Teleseismic Waveforms
- [CAPsf](https://doi.org/10.1785/0220190349): Invert source mechanisms for single‐force events
- [CPS330](http://www.eas.slu.edu/eqc/eqccps.html) |
  [A tutorial (in Chinese)](https://seismo-learn.org/software/cps/) |
  [Moment Tensor Workshop (2012)](http://www.eas.slu.edu/eqc/eqc_cps/workshop.html):
  Collection of programs for calculating theorectical seismogram, receiver function,
  surface wave dispersion curve et al.
- [Moment-Tensor Inversion](http://eqseis.geosc.psu.edu/cammon/HTML/MTinvDocs/mtinv01.html)
- [W Phase](http://eost.u-strasbg.fr/wphase): W Phase source inversion
- [HASH](https://www.usgs.gov/node/279393):
  Determine double-couple earthquake focal mechanisms based on P-wave polarity and S/P amplitude ratios
- [SKHASH](https://code.usgs.gov/esc/SKHASH)
  Python package for earthquake focal mechanism inversions
- [focmec](https://seiscode.iris.washington.edu/projects/focmec):
  Determining and displaying double-couple earthquake focal mechanisms
- [FPFIT](https://www.usgs.gov/software/fpfit-fpplot-and-fppage):
  Calculate and plot fault-plane solutions from first-motion data
- [hybridMT](https://www.induced.pl/software): Moment tensor inversion and refinement written in MATLAB
- [fociMT](https://www.induced.pl/software): A stand-alone command line application
  for seismic moment tensor inversion, which is an integral part of hybridMT
- [FOCI](https://www.induced.pl/software): A stand-alone Windows GUI application
  for performing the seismic moment tensor inversion and source parameters assessment
- [lsforce](https://code.usgs.gov/ghsc/lhp/lsforce):
  A Python-based single-force seismic inversion framework for massive landslides
- [ISOLA](http://www.spice-rtn.org/library/software/ISOLA.html): Retrieve isolated
  asperities from regional or local waveforms based on multiple-point source
  representation and iterative deconvolution
- [MTfit](https://github.com/djpugh/MTfit): Bayesian Moment Tensor Fitting
- [MT_DECOMPOSITION](https://www.ig.cas.cz/mt-decomposition):
  Moment tensor decomposition written in MATLAB
- [PCA-DECOMPOSITION](https://www.ig.cas.cz/en/pca-decomposition):
   Principal Component Decomposition of seismic traces for extracting the common wavelet written in MATLAB
- [pyTDMT](https://github.com/fabriziobernardi/pydmt): Time Domain Moment Tensor Inversion
- [RPGEN](https://www.induced.pl/software/radiation-of-psshsv-waves-from-shear-tensile-source-model):
  Calculates P-wave, S-wave, SH-wave and SV-wave radiation pattern using shear-tensile source model

### Seismicity

- [CLUSTER2000](https://www.usgs.gov/software/cluster2000): Identify clusters (e.g., aftershocks) in an earthquake catalog
- [GR_EST](https://github.com/MatteoTaroniINGV/GR_EST): An OCTAVE/MATLAB toolbox
  to estimate Gutenberg–Richter law parameters and their uncertainties
- [sd](http://bemlar.ism.ac.jp/zhuang/software.html): **S**tochastic **d**eclustering
  based on the space-time ETAS model
- [ZMAP](http://www.seismo.ethz.ch/en/research-and-teaching/products-software/software/ZMAP):
  A GUI to analyse catalogue data

### Stress/Strain

- [Coulomb 3](https://www.usgs.gov/node/279387): Investigate Coulomb stress
  changes on mapped faults and earthquake nodal planes
- [AutoCoulomb](https://github.com/jjwangw/CoulombAnalysis):
  Compute Coulomb stress changes induced by earthquakes
- [DC3D0/DC3D](https://www.bosai.go.jp/information/dc3d.html): Calculate displacement,
  strain and tilt at depth due to a point/rectangular strike/dip/tensile source in a half-space
- [MSATSI](https://www.induced.pl/software): Stress tensor inversion written in MATLAB
- [SATSI](https://www.usgs.gov/node/279402): **S**patial **A**nd **T**emporal
  **S**tress **I**nversion from focal mechanisms
- [STRESSINVERSE](https://www.ig.cas.cz/en/stress-inverse): An iterative joint
  inversion for stress and fault orientations from focal mechanisms written in MATLAB or Python

----

## Seismic Tomography

### Body-wave Tomography

- [Adjoint-state Traveltime Tomography](https://github.com/MIGG-NTU/ATT_training) |
  [A tutorial](https://www.koushare.com/video/videodetail/14760) in Chinese
- [Nick Rawlinson: Software](http://rses.anu.edu.au/~nick)
    - [FMTOMO](http://rses.anu.edu.au/~nick/fmtomo.html) |
      [iEarth](http://www.iearth.edu.au/codes/FMTOMO):
      3-D traveltime tomography based on fast marching method written in Fortran
    - [FMTT](http://rses.anu.edu.au/~nick/teletomo.html) |
      [iEarth](http://www.iearth.edu.au/codes/FMTT):
      Teleseismic tomography based on fast marching method written in Fortran
- [simul2017](https://doi.org/10.5281/zenodo.5746047) |
  [SIMUL2000](http://www.geology.wisc.edu/~thurber/simul2000/):
  Simultaneous inversion of travel-time data for 3-D velocity and hypocenters
- [Haijiang Zhang](https://earthquake.ustc.edu.cn/)'s tomoDD |
  [linkresearcher](https://www.linkresearcher.com/trainings/d65fe2ef-3cc8-4eef-9821-261e3d49a9ae) |
  [bilibili](https://www.bilibili.com/video/av841708479?p=4):
  Double difference tomography
- [Etomo](https://doi.org/10.6084/m9.figshare.21820860):
  A eikonal equaiton-based seismic tomography method for traveltime tomography
- [FAST](http://terra.rice.edu/department/faculty/zelt/fast.html):
  3-D **F**irst **A**rrival **S**eismic **T**omography programs
- [LOTOS](http://www.ivan-art.com/science/LOTOS/): Local earthquake tomographic inversion written in Fortran
- [PyVoroTomo](https://github.com/HongjianFang/PyVoroTomo) |
  [A tutorial](https://www.koushare.com/video/videodetail/14785) in Chinese:
  Poisson Voronoi cells based seismic traveltime tomography
- [RAYINVR](http://terra.rice.edu/department/faculty/zelt/rayinvr.html) |
  [A modified version](https://github.com/hzhu212/rayinvr):
  2-D traveltime inversion and amplitude modeling programs

### Ambient Noise Data Processing

- [CPS330](http://www.eas.slu.edu/eqc/eqccps.html) |
  [A tutorial (in Chinese)](https://seismo-learn.org/software/cps/):
  Collection of programs for calculating theorectical seismogram, receiver function,
  surface wave dispersion curve et al.
  - [Tutorilas: Surface Waves](http://www.eas.slu.edu/eqc/eqc_cps/TUTORIAL/)
- [CU-Boulder: Research Products](http://ciei.colorado.edu/Products)
  - [Ambient Noise Cross-Correlation](http://ciei.colorado.edu/Products/) |
    [GitHub](https://github.com/NoiseCIEI/ANCC):
    Ambient noise data processing code and database for processing written in C
  - [Seed2Cor](https://github.com/NoiseCIEI/Seed2Cor):
    Seismic Ambient Noise Cross-Correlation in Parallel written in C
- [Huajian Yao: Codes and Software](https://yaolab.ustc.edu.cn/Cas/list.htm): |
  [linkresearcher](https://www.linkresearcher.com/trainings/d65fe2ef-3cc8-4eef-9821-261e3d49a9ae) |
  [bilibili](https://www.bilibili.com/video/av841708479?p=5):
  - `NoiseCorr`: Ambient noise cross-correlation codes for daily long SAC format data in Matlab
- [Lapo Boschi: Software](http://hestia.lgs.jussieu.fr/~boschil/downloads.html):
  Ambient-noise cross-correlation and dispersion-curve measurement in the frequency domain written in Python
- [Martin Schimmel: Software](http://diapiro.ictja.csic.es/gt/mschi/SCIENCE/tseries.html#software)
  - [Corr_stack](http://diapiro.ictja.csic.es/gt/mschi/SCIENCE/tseries.html#software) |
    [IRIS Webinar](https://www.youtube.com/watch?v=qr5EFhQzPwg):
    Ambient noise processing tools written in Fortran
  - [PCC](http://diapiro.ictja.csic.es/gt/mschi/SCIENCE/tseries.html#software):
    Fast and efficient **p**hase **c**ross-**c**orrelation written in C
  - [PCC2](http://diapiro.ictja.csic.es/gt/mschi/SCIENCE/tseries.html#software):
    Fast and efficient phase cross-correlation written in Python
- [CC-FJpy](https://github.com/ColinLii/CC-FJpy) |
  [A tutorial](https://www.koushare.com/video/videodetail/14523) (in Chinese):
  A Python Package for seismic ambient noise cross-correlation and the frequency-Bessel transform method
- [MATnoise](https://github.com/jbrussell/MATnoise):
  Calculate ambient noise cross-correlations, measure phase velocities, and invert for phase velocity maps in MATLAB
- [NoisePy](https://github.com/mdenolle/noisepy):
  Fast and easy computation of ambient noise cross-correlation functions written in Python,
  with noise monitoring and surface wave dispersion analysis
- [SeisNoise.jl](https://github.com/tclements/SeisNoise.jl):
  Ambient Noise Cross-Correlation in Julia

### Surface-wave Dispersion Measurement

- [CPS330](http://www.eas.slu.edu/eqc/eqccps.html) |
  [A tutorial (in Chinese)](https://seismo-learn.org/software/cps/):
  Collection of programs for calculating theorectical seismogram, receiver function,
  surface wave dispersion curve et al.
  - [Tutorilas: Surface Waves](http://www.eas.slu.edu/eqc/eqc_cps/TUTORIAL/)
  - [User Questions and Answers: The use of the two-station technique to obtain phase velocities](http://www.eas.slu.edu/eqc/eqc_cps/Questions/)
- [CU-Boulder: Research Products](http://ciei.colorado.edu/Products)
  - [AFTAN](http://ciei.colorado.edu/Products/) |
    [GitHub](https://github.com/NoiseCIEI/AFTAN) |
    [Python package](https://github.com/NoisyLeon/pyaftan):
    **A**utomatic **F**requency-**T**ime **An**alysis analysis of ambient noise
    cross-correlations written in Fortran
- [Huajian Yao: Codes and Software](https://yaolab.ustc.edu.cn/Cas/list.htm) |
  [linkresearcher](https://www.linkresearcher.com/trainings/d65fe2ef-3cc8-4eef-9821-261e3d49a9ae) |
  [bilibili](https://www.bilibili.com/video/av841708479?p=5):
  - `TSAnalysis`: Surface wave two-station dispersion analysis GUI software (in Matlab)
    - [Auto_TAnaylsis_GUI](https://github.com/Chuanming-Liu/Auto_TAnaylsis_GUI):
      Automatic surface wave two-station dispersion analysis GUI software (in Matlab)
  - `EGFAnalysisTimeFreq`: Dispersion Analysis GUI software for ambient noise cross-correlation functions in Matalb
- [Lapo Boschi: Software](http://hestia.lgs.jussieu.fr/~boschil/downloads.html):
  Ambient-noise cross-correlation and dispersion-curve measurement in the frequency domain written in Python
- [Martin Schimmel: Software](http://diapiro.ictja.csic.es/gt/mschi/SCIENCE/tseries.html#software)
  - [TS_PWS0_UG](http://diapiro.ictja.csic.es/gt/mschi/SCIENCE/tseries.html#software):
    Group velocity determination using phase coherence and resampling strategies
- [ASWMS](https://ds.iris.edu/ds/products/aswms) |
  [GitHub](https://github.com/jinwar/matgsdf):
  **A**utomated **S**urface **W**ave Phase Velocity **M**easuring **S**ystem written in MATLAB,
  measuring the phase and amplitude of surface waves and then generate
  surface-wave tomography maps using the Eikonal and Helmhotza tomography
- [CC-FJpy](https://github.com/ColinLii/CC-FJpy) |
  [A tutorial](https://www.koushare.com/video/videodetail/14523) (in Chinese):
  A Python Package for seismic ambient noise cross-correlation and the frequency-Bessel transform method
- [disp_codes](https://github.com/arjundatta23/disp_codes):
  A collection of seismological codes imlpementing three array-based techniques
  for measuring multi-mode surface wave phase velocity dispersion
- [DisperNet](https://github.com/Dongsh/DisperNet):
  Extracting and classifying the dispersion curves in the Frequency-Bessel dispersion spectrum
- [GSpecDisp](https://github.com/Hamzeh-Sadeghi/GSpecDisp):
  A Matlab package for phase-velocity dispersion measurement from ambient-noise correlations
- [mat-LRTdisp](https://github.com/jbrussell/mat-LRTdisp):
  Measuring multi-mode surface wave dispersion using the Linear Radon Transform (LRT) written in MATLAB
- [MATnoise](https://github.com/jbrussell/MATnoise):
  Calculate ambient noise cross-correlations, measure phase velocities, and invert for phase velocity maps in MATLAB
- [NoisePy](https://github.com/mdenolle/noisepy):
  Fast and easy computation of ambient noise cross-correlation functions written in Python,
  with noise monitoring and surface wave dispersion analysis
- [PyMASWdisp](https://github.com/dpteague/PyMASWdisp):
  Calculate dispersion data from **M**\ ulti-Channel **A**\ nalysis of **S**\ urface **W**\ aves data written in Python
- [SurfaceWaveMFA](http://eqseis.geosc.psu.edu/cammon/index.html):
  Surface Wave **M**ultiple **F**ilter **A**nalysis
- [XDCpick](https://gitext.gfz-potsdam.de/chris/xdcpick):
  A simple tool for efficient picking of group velocity dispersion curves written in C

### Surface-wave Tomography

- [ASWMS](https://ds.iris.edu/ds/products/aswms) |
  [GitHub](https://github.com/jinwar/matgsdf):
  **A**utomated **S**urface **W**ave Phase Velocity **M**easuring **S**ystem written in MATLAB,
  measuring the phase and amplitude of surface waves and then generate
  surface-wave tomography maps using the Eikonal and Helmhotza tomography
- [FMST](http://rses.anu.edu.au/~nick/surftomo.html) |
  [iEarth](http://www.iearth.edu.au/codes/FMST):
  Traveltime tomography in 2-D spherical shell coordinates based on fast marching method
- [rj-TOMO](http://www.iearth.edu.au/codes/rj-TOMO): 2-D transdimensional travel
  time tomography based on Reversible jump Markov chain Monte Carlo algorithm
- [tomo_sp_cu_s](http://ciei.colorado.edu/Products/) |
  [GitHub](https://github.com/NoiseCIEI/RayTomo):
  Ray theoretic surface wave tomography
- [MATnoise](https://github.com/jbrussell/MATnoise):
  Calculate ambient noise cross-correlations, measure phase velocities, and invert for phase velocity maps in MATLAB
- [SurfwaveTomoPrograms](https://github.com/chukren/SurfwaveTomoPrograms):
  Finite frequency Rayleigh wave tomography programs

### Surface-wave Dispersion Inversion

- [CPS330](http://www.eas.slu.edu/eqc/eqccps.html) |
  [A tutorial (in Chinese)](https://seismo-learn.org/software/cps/):
  Collection of programs for calculating theorectical seismogram, receiver function,
  surface wave dispersion curve et al.
  - [Tutorilas: Surface Waves](http://www.eas.slu.edu/eqc/eqc_cps/TUTORIAL/)
  - [srfpython](https://github.com/obsmax/srfpython): Compute, display, and
      invert 1D depth models based on CPS330 written in Python
- [dispinversion](https://github.com/jinwar/dispinversion): Surface wave dispersion
  inversion code written in MATLAB
- [MCDisp](https://github.com/xin2zhang/MCDisp): Surface wave dispersion inversion
  using Monte Carlo methohd written in Python

### Surface-wave Tomography Workflow

- [seismic-noise-tomography](https://github.com/bgoutorbe/seismic-noise-tomography):
  Python framework for seismic noise tomography

### Direct Inversion of Surface-wave Dispersion Data

- [DSurfTomo](https://github.com/HongjianFang/DSurfTomo):
  Direct inversion of surface dispersion data based on ray tracing written in Fortran
- [DRadiSurfTomo](https://github.com/ShaoqianHu/DRadiSurfTomo):
  Direct Surface Wave Radial Anisotropy Tomography written in Fortran
- [DAzimSurfTomo](https://github.com/Chuanming-Liu/DAzimSurfTomo) |
  [A tutorial](https://www.koushare.com/video/videodetail/14733) (in Chinese):
  Direct inversion of Rayleigh wave dispersion data for 3-D azimuthal anisotropy based on ray tracing
- [3D Monte Carlo Direct Inversion](https://blogs.ed.ac.uk/imaging/research/codes/) |
  [GitHub](https://github.com/xin2zhang/MCTomo):
  3D Monte Carlo tomography using both body and surface wave data

### Surface-wave Dispersion Forward Calculation

- [CPS330](http://www.eas.slu.edu/eqc/eqccps.html) |
  [A tutorial (in Chinese)](https://seismo-learn.org/software/cps/):
  Collection of programs for calculating theorectical seismogram, receiver function,
  surface wave dispersion curve et al.
  - [disba](https://github.com/keurfonluu/disba): Numba-accelerated computation
    of surface wave dispersion that implements a subset of codes from CPS330 written in Python
  - [pyfwrd](https://github.com/NoisyLeon/pyfwrd): A forward modelling code
    for surface wave, receiver functions and shear wave splitting,
    given tilted hexagonal symmetric media
  - [PyLayeredModel](https://github.com/harrymd/PyLayeredModel): Python wrappers
    for the CPS and Rftn libraries for layered models in seismology
  - [pysurf96](https://github.com/miili/pysurf96): Python wrapper for
    modelling surface wave dispersion curves from surf96 in CPS330 written in Python
  - [srfpython](https://github.com/obsmax/srfpython): compute, display,
    invert 1D depth models based on CPS330 written in Python
- [Geopsy](http://www.geopsy.org/download.php): An open source software for geophysical
  research and application written in C++
- [Generalized Eigenproblem Spectral Collocation](https://github.com/mdenolle/gesc):
  Solves surface-wave eigenproblem (air-solid interface seismic waves) in
  laterally homogeneous media with piecewise smooth elastic structure
- [senskernel](http://ciei.colorado.edu/Products/) |
  [GitHub](https://github.com/NoiseCIEI/SensKernel):
  Phase/Group velocities Sensitivity Kernels
- [MCMC_ANISO_FORWARD](https://github.com/hejunzhu/MCMC_ANISO_FORWARD):
  Compute surface wave dispersion curves and receiver functions in anisotropic
  models with hexagonally symmetry
- [TheoreticalDispersionSpectrum](https://github.com/ColinLii/TheoreticalDispersionSpectrum):
  Theoretical Dispersion Spectrum calculation by the Generalized Reflection and Transmission Method
- [Vphase](http://www.spice-rtn.org/library/software/vphase.html):
  A training code to calculation of phase velocity dispersion curves

----

## Seismic Imaging

### Receiver Function

- [rf](https://github.com/trichter/rf): Receiver function calculation in seismology written in Python
- [hk](http://www.eas.slu.edu/People/LZhu/home.html) |
  [Chinese note](https://blog.seisman.info/hk-install):
  Receiver function package (synthetic RF, deconvolution, and H-k stacking)
- [CPS330](http://www.eas.slu.edu/eqc/eqccps.html) |
  [Python wrapper: PyLayeredModel](https://github.com/harrymd/PyLayeredModel) |
  [A tutorial (in Chinese)](https://seismo-learn.org/software/cps/):
  Collection of programs for calculating theorectical seismogram, receiver function,
  surface wave dispersion curve et al.
- [RAYSUM](https://home.cc.umanitoba.ca/~frederik/Software) |
  [PyRaysum](https://github.com/paudetseis/PyRaysum):
  Ray-theoretical modelling of teleseismic waves in dipping, anisotropic structures
- [RF codes](https://github.com/rmartinshort/RecieverFunctions)
    - Charles J. Ammon's codes
    - Cheng's codes, including Qingju Wu's maximum entrop deconvolution method (`burgays`)
- Charles J. Ammon's RF codes:
  [An Overview of Receiver-Function Analysis](http://eqseis.geosc.psu.edu/cammon/HTML/RftnDocs/rftn01.html)
- Jeffrey Park's RF codes:
  - [Recfunk21](https://github.com/RU21Seismology/Recfunk21):
    Computation of receiver functions and harmonic decomposition analysis.
    It supersedes previously released [recfunk09_pick](https://seiscode.iris.washington.edu/projects/recfunk09-pick)
    and [recfunk_ascii](https://seiscode.iris.washington.edu/projects/recfunk-ascii).
  - [rfsyn](https://seiscode.iris.washington.edu/projects/rfsyn):
    Computes a receiver-function for a stack of anisotropic layers over an isotropic halfspace
- [CCP](http://www.eas.slu.edu/People/LZhu/home.html) |
  [Chinses note](https://blog.seisman.info/ccp-install):
  Common-Conversion-Point (CCP) stacking of receiver functions
- [CrazySeismic](https://faculty.sustech.edu.cn/?p=39425&tagid=yucq&cat=5&iscss=1&snapid=1&lang=en) |
  [linkresearcher](https://www.linkresearcher.com/trainings/d65fe2ef-3cc8-4eef-9821-261e3d49a9ae) |
  [bilibili](https://www.bilibili.com/video/BV1e54y1i7FM?p=3):
  A MATLAB GUI-based package to process single channel seismic data (picking, McCC, PCA, Deconvolution)
- [FuncLab](https://seiscode.iris.washington.edu/projects/funclab) (invalid link) |
  [revised FuncLab](https://seiscode.iris.washington.edu/projects/funclab-revised):
  A Matlab based GUI for handling receiver functions
- [h-k-c](https://github.com/ljt-uiuc/H-k-c) |
  [linkresearcher](https://www.linkresearcher.com/trainings/d65fe2ef-3cc8-4eef-9821-261e3d49a9ae) |
  [bilibili](https://www.bilibili.com/video/av841708479?p=3):
  Generalized H-k after harmonic correction on receiver functions
- [IRFFM](http://www.iearth.edu.au/codes/IRFFM/): An interactive Java program for
  joint interactive forward modelling of teleseismic receiver functions and surface wave dispersion
- [MCMC_ANISO_FORWARD](https://github.com/hejunzhu/MCMC_ANISO_FORWARD):
  Compute surface wave dispersion curves and receiver functions in anisotropic
  models with hexagonally symmetry
- [processRFmatlab](https://github.com/iwbailey/processRFmatlab):
  MATLAB functions and scripts for working with receiver functions
- [psdm](https://www.linkresearcher.com/trainings/d65fe2ef-3cc8-4eef-9821-261e3d49a9ae) |
  [bilibili](https://www.bilibili.com/video/av841708479?p=2):
  A wave equation migration method for receiver function imaging
- [PSV Hybrid RF](http://geophysics.geo.sunysb.edu/wen/resource/index.html) |
  [GitHub](https://github.com/Geolab-USTC/PSV_Hybrid_RF):
  Calculating synthetic RF in two-dimensional localized hetergeneous structures
  based on PSV Hybrid method (GRT-FD)
- [pyfwrd](https://github.com/NoisyLeon/pyfwrd): A forward modelling code for surface wave,
  receiver functions and shear wave splitting, given tilted hexagonal symmetric media
- [RF_INV](https://github.com/akuhara/RF_INV): Receiver function inversion by
  reversible-jump Markov-chain Monte Carlo written in Fortran
- [RfPy](https://paudetseis.github.io/RfPy/): Receiver function caculcation along with post-processing
  (e.g., hk, harmonic decomposition, CCP) written in Python
- [rj-RF](http://www.iearth.edu.au/codes/rj-RF): Receiver Function Inversion
  using Reversible jump Markov chain Monte Carlo algorithm
- [RFtool](https://members.elsi.jp/~george/rftool.html): An interactive GUI tool to simulate P or S receiver functions
- [SplitRFLab](https://github.com/xumi1993/SplitRFLab): A Matlab toolbox of processing
  receiver functions and shear wave spliting
- [seispy](https://github.com/xumi1993/seispy): A Python module for processing seismological data and calculating Receiver Functions

### Rayleigh-wave Ellipticity

- [DOP-E](http://diapiro.ictja.csic.es/gt/mschi/SCIENCE/tseries.html#software) |
  [GitHub](https://github.com/berbellini/DOP-E):
  Rayleigh wave ellipticity, measurement and inversion from ambient noise written in Fortran and Python
- [Quake-E](https://github.com/berbellini/Quake-E): Measure Rayleigh wave ellipticity
  from earthquake data written in Python

### Shear Wave Splitting

- [SplitLab](http://splitting.gm.univ-montp2.fr) |
  [An updated version](https://robporritt.wordpress.com/software):
  Shear-wave birefringence analysis code written in Matlab
- [MFAST](http://mfast-package.geo.vuw.ac.nz): Multiple Filter Automatic Splitting
  Technique written in Fortran
- [MSAT](https://github.com/andreww/MSAT): The MATLAB Seismic Anisotropy Toolkit
- [multisplit](https://github.com/ftilmann/multisplit): Shear-wave birefringence analysis code
- [pyfwrd](https://github.com/NoisyLeon/pyfwrd): A forward modelling code for surface wave,
  receiver functions and shear wave splitting, given tilted hexagonal symmetric media
- [SHEBA](https://github.com/jwookey/sheba): Shear-wave birefringence analysis
- [SplitPy](https://paudetseis.github.io/SplitPy/): Teleseismic shear-wave (SKS)
  Splitting Toolbox written in Python
- [SplitRacer](http://www.geophysik.uni-frankfurt.de/64002762/Software):
  Semiautomated Analysis and Interpretation of Teleseismic Shear-Wave Splitting in MATLAB
- [sws_tools](https://github.com/michaelgrund/sws_tools):
  MATLAB tools for modeling and plotting of shear-wave splitting data
- [ECOMAN](https://newtonproject.geoscienze.unipd.it/ecoman/): Software package for computing
  elastic and viscous mechanical properties of mantle rocks and seismic forward and inverse
  modelling

### Scattering and Intrinsic Attenuation

- [CodaNorm](https://github.com/cormorant/CodaNorm):
  Calculating the seismic quality factor using the coda normalization method
- [Coda-Q-Inversion](https://github.com/wew053/Coda-Q-Inversion):
  Coda-Q inversion written in MATALB
- [MuRAT](https://github.com/LucaDeSiena/MuRAT): Multi-resolution seismic attenuation
  tomography using Body and Coda Waves written in MATLAB
- [psphoton](https://github.com/nmancinelli/psphoton):
  Monte Carlo simulation of elastic-wave scattering processes in Earth's interior
- [PSPHOTON_POSO](https://github.com/nmancinelli/PSPHOTON_POSO): Model Po/So envelopes
- [qopen](https://github.com/trichter/qopen): Separation of intrinsic and scattering Q by envelope inversion
- [usattenuation](https://github.com/trichter/usattenuation):
  Intrinsic attenuation, scattering attenuation and site amplification for the contiguous U.S.
- [Radiative3D](https://github.com/christophersanborn/Radiative3D):
  Radiative transport in 3D Earth models

### Joint Inversion of Seismological Data

- [Weisen Shen](https://www.stonybrook.edu/commcms/geosciences/people/_faculty/shen.php)'s [code](http://weisen.wustl.edu/For_Comrades/for_self/PKU_Workshop/):
  A workshop in Peking University in 2017 for joint inversion of surface-wave dispersion data and receiver function
- [SEIS_FILO](https://github.com/akuhara/SEIS_FILO): **SEIS**mological inversion tools for
  **F**lat and **I**sotropic **L**ayered structure in the **O**cean
- [BayHunter](https://github.com/jenndrei/BayHunter): McMC transdimensional Bayesian
  inversion of surface wave dispersion and receiver functions in Python
- [Huajian Yao: Codes and Software](https://yaolab.ustc.edu.cn/resources.php?i=28):
  Inversion of Vs, Vp/Vs, and interface depth using dispersion data and Rayleigh wave ellipticity
- [LitMod_seis](https://www.juanafonso.com/software): A joint inversion code
  for inverting Vs and anisotropy
- [jointBSVpVs](https://github.com/HongjianFang/jointBSVpVs):
  Joint inversion of body and surface wave data for Vp/Vs
- [RfSurfHmc](https://github.com/nqdu/RfSurfHmc): Joint inversion of Receiver
  Function and Surface Wave Disperion by Hamilton Monte Carlo Method

### Waveform Inversion

- [Fault zone travel time and waveform modelling](https://www.linkresearcher.com/trainings/d65fe2ef-3cc8-4eef-9821-261e3d49a9ae) |
  [bilibili](https://www.bilibili.com/video/av841708479?p=6)
- [MC3deconv](https://github.com/akuhara/MC3deconv): Bayesian inversion to recover
  Green's functions of receiver-side structures from teleseismic waveforms

### Full Waveform Inversion

- [IFOS2D](https://www.gpi.kit.edu/english/498.php?tab=%5B245%5D#tabpanel-245) |
  [GitLab](https://git.scc.kit.edu/GPIAG-Software/IFOS2D):
  2D elastic full waveform inversion
- [IFOS3D](https://www.gpi.kit.edu/english/498.php?tab=%5B245%5D#tabpanel-245) |
  [GitLab](https://git.scc.kit.edu/GPIAG-Software/IFOS3D):
  3D elastic full waveform inversion
- [DENISE](https://github.com/daniel-koehn/DENISE-Black-Edition):
  2D time-domain isotropic (visco)elastic FD modeling and full waveform inversion code for P/SV-waves
- [2DNoise_Adjoint_tomography](https://github.com/ustcchaozhang/2DNoise_Adjoint_tomography):
  2D ambient noise adjoint tomography and joint inversion of ambient noise and teleseismic body-wave
- [2DZH_Adjoint_tomography](https://github.com/ustcchaozhang/2DZH_Adjoint_tomography):
  2D ZH Amplitude Ratios adjoint tomography
- [ASKI](http://www.gmg.ruhr-uni-bochum.de/geophysik/seismology/aski.html):
  Seismic Full Waveform Inversion and sensitivity/resolution analysis
- [Finite-frequency tomography](https://www.geoazur.fr/GLOBALSEIS/Soft.html)
- [FWI.jl](https://github.com/JuliaInv/FWI.jl): Solving the 2D and 3D acoustic
  full waveform inversion on a regular rectangular mesh written in Julia
- [GERMAINE](https://github.com/daniel-koehn/GERMAINE):
  2D frequency-domain acoustic/SH/TE-mode FD modelling and full waveform inversion code
- [LASIF](http://www.lasif.net): **LA**rge-scale **S**eismic **I**nversion **F**ramework
  to perform adjoint full seismic waveform inversions
- [Salvus](https://mondaic.com/product): A scalable software suite for waveform
  modeling and inversion across the scales
- [SAVA](https://github.com/daniel-koehn/SAVA): 3D seismic finite-difference modelling,
  Full Waveform Inversion (FWI) and Reverse Time Migration (RTM) code for wave
  propagation in isotropic (visco)-acoustic/elastic and anisotropic orthorhombic/triclinic elastic media
- [seisDD](https://github.com/yanhuay/seisDD): Double-difference adjoint seismic tomography
- [SeisElastic2D](https://github.com/crewesleo/SeisElastic2D):
  An open-source package for multiparameter FWI in isotropic-, anisotropic- and visco-elastic media
- [SES3D](https://cos.ethz.ch/software/production/ses3d.html):
  Simulation of elastic wave propagation and waveform inversion in a spherical section
- [TOY2DAC](https://seiscope2.osug.fr/TOY2DAC,82?lang=fr):
  2D Acoustic frequency-domain Full Waveform modeling and inversion code

### Multi-observable Modelling and Inversion of Geophysical Data

- [LitMod](https://www.juanafonso.com/software): Multi-observable modelling and inversion of geophysical data
    - [LitMod_2D](https://www.juanafonso.com/software) |
      [A new version in Github](https://github.com/ajay6763/LitMod2D_2.0_package_dist_users):
      An interactive software to perform multi-observable forward modelling of
      geophysical data for 2D whole lithospheric structure of the Earth and/or
      other terrestrial planets
    - [LitMod_T](https://www.juanafonso.com/software): the "transient" equivalent of LitMod_2D
    - [LitMod_3D](https://www.juanafonso.com/software) |
      [A new version in Github](https://github.com/javfurchu/litmod):
      3D integrated geophysical-petrological interactive modelling of the lithosphere
      and underlying upper mantle using a variety of input datasets:
      potential fields (gravity and magnetic), surface heat flow, elevation (isostasy),
      seismics, magnetotellurics and geochemical
    - [LitMod_4INV](https://www.juanafonso.com/software):
      A fully nonlinear probabilistic inversion codes in spherical coordinates for
      the compositional and thermal structure of the lithosphere and upper mantle
- [JDSurfG](https://github.com/nqdu/JDSurfG): Joint Inversion of Direct Surface
  Wave Tomography and Bouguer Gravity

----

## Ambient Noise

### Ambient Noise Monitoring

- [MSNoise](http://www.msnoise.org): A Python Package for Monitoring seismic velocity
  changes using ambient seismic noise
- [NoisePy](https://github.com/mdenolle/noisepy): Fast and easy computation of
  ambient noise cross-correlation functions written in Python, with noise monitoring
  and surface wave dispersion analysis
- [yam](https://github.com/trichter/yam): Yet another monitoring tool using
  correlations of ambient noise written in Python

### Noise HVSR

- [IRIS HVSR](https://github.com/EarthScope/HVSR): A set of Python scripts to compute
  and plot HVSR curves using MUSTANG PDF-PSD web service from IRIS
- [Geopsy](http://www.geopsy.org/download.php): An open source software for geophysical
  research and application written in C++
- [HtoV-Toolbox](https://github.com/krischer/HtoV-Toolbox):
  A toolbox that allows the simple calculation of H/V ratios
- [HV-Inv](https://w3.ual.es/GruposInv/hv-inv):
  Forward calculation and inversion of H/V spectral ratios
- [HVResPy](https://www.researchgate.net/publication/283085984_HVResPy_an_open-source_Python_tool_for_Geopsy_HVSR_post-processing?channel=doi&linkId=5629ff6308ae518e347ef829&showFulltext=true):
  An open-source Python tool for Geopsy HVSR post-processing
- [hvsrpy](https://github.com/jpvantassel/hvsrpy): A Python package for horizontal-to-vertical
  spectral ratio processing
- [HV-TEST](https://github.com/AlbaMat/HV-TEST): A tool for the verification
  of the reliability and clarity of the H/V peak according to the SESAME criteria
- [OpenHVSR](https://www.samuelbignardi.com/en/openhvsr-project):
  Measure and Inversion of HVSR written in MATLAB

----

## Earth's interior

- [FastTrip](https://github.com/lijiaqi0315/FastTrip): Fast MPI-accelerated Triplication
  Waveform Inversion Package
- [PKPprecursor](http://geophysics.geo.sunysb.edu/wen/resource/index.html) |
  [GitHub](https://github.com/Geolab-USTC/PKPprecursor):
  Locating seismic scatterers in the lower mantle, using PKP precursor onsets
- [ss-precursors](https://github.com/nmancinelli/ss-precursors): SS Precursor Workflow

----

## Seismic Data Analysis

### General Signal Analysis

- [FFTW](http://fftw.org/): A C subroutine library for computing the
  discrete Fourier transform (DFT)
- [Multitaper Spectrum Estimation Library](https://www.gaprieto.com/software) |
  [multitaper](https://github.com/gaprieto/multitaper) |
  [mtspec](https://github.com/krischer/mtspec): **M**ulti**t**aper **Spec**tral Estimation
- [multitaper_toolbox](https://github.com/preraulab/multitaper_toolbox):
  Computing multitaper spectrogram implemented in MATLAB, Python, and R
- [SEC_C](https://github.com/Naderss/SEC_C): Super-Efficient Cross-Correlation
- [SeisSound](https://ds.iris.edu/ds/products/seissound/):
  The Audio/Video Seismic Waveform Visualization
- [datamovies](https://github.com/jbrussell/datamovies):
  A couple of demo codes for sonifying data

### Phase Picking

- [Adaptive Stacking](http://rses.anu.edu.au/seismology/soft/astack/index.html) |
  [iEarth](http://www.iearth.edu.au/codes/AdaptiveStacking):
  Adaptive stacking to estimating traveltime residual patterns across a network of seismic stations
- [AIMBAT](https://github.com/pysmo/aimbat):
  Measuring teleseismic body wave arrival times for large seismic arrays written in Python
- [CrazySeismic](https://faculty.sustech.edu.cn/?p=39425&tagid=yucq&cat=5&iscss=1&snapid=1&lang=en) |
  [linkresearcher](https://www.linkresearcher.com/trainings/d65fe2ef-3cc8-4eef-9821-261e3d49a9ae) |
  [bilibili](https://www.bilibili.com/video/BV1e54y1i7FM?p=3):
  A MATLAB GUI-based package to process single channel seismic data (picking, McCC, PCA, Deconvolution)
- [CrazyTremor](https://www.kevinchao.com/crazytremor):
  A MATLAB GUI-based package to display and picking multi-channel seismic data
- [generalized-phase-detection](https://github.com/interseismic/generalized-phase-detection):
  Generalized Seismic Phase Detection with Deep Learning
- [mccc](https://github.com/xumi1993/mccc): Determines optimum relative delay times
  for a set of seismograms based on the VanDecar & Crosson **m**ulti-**c**hannel **c**ross-**c**orrelation algorithm
- [PhaseNet](https://github.com/wayneweiqiang/PhaseNet) |
  [A tutorial](https://www.koushare.com/video/videodetail/14754) (in Chinese):
  A Deep-Neural-Network-Based Seismic Arrival Time Picking Method
- [PhasePApy](https://github.com/austinholland/PhasePApy):
  Seismic Phase Picker and Associator, written in Python
- [P-Phase Picker](https://www.usgs.gov/node/279399):
  Detecting P-phase onset written in Java and Matlab

### Single Station Signal Analysis

- [IRIS DMC Noise Toolkit](https://github.com/EarthScope/noise-toolkit):
  Compute power spectral densities and perform microseism energy computations
  and frequency dependent polarization analysis
- [BCseis](http://www.ceri.memphis.edu/people/clangstn/software.html):
  a MatLab GUI and set of inline functions for performing various non-linear
  thresholding operations using the Continuous Wavelet Transform
- [Est_noise](https://www.usgs.gov/node/279390): Analyze time-series data
  to quantify temporal correlations and simultaneously estimate rates, offsets,
  and other functional dependencies
- [MUSTANG](https://service.iris.edu/mustang) |
  [Tutorial](https://ds.iris.edu/ds/nodes/dmc/tutorials/getting-started-with-mustang):
  A quality assurance system that provides metrics pertaining to seismic data quality
- [PIQQA](https://github.com/EarthScope/piqqa) |
  [An introduction](https://ds.iris.edu/ds/newsletter/vol23/no1/533/piqqa-data-quality-reports-for-passcal-experiments/):
  A python utility to create a simple Quality Assurance report
- [Pycheron](https://github.com/sandialabs/pycheron):
  A Python library for quality control of seismic data based on IRIS MUSTANG
- [PolarGUI](https://github.com/lhl-cdut/PolarGUI):
  A GUI polarization analysis of the three-component seismic data written in MATLAB
- [Polfre](http://diapiro.ictja.csic.es/gt/mschi/SCIENCE/tseries.html#software):
  Time-Frequency Dependent Polarization written in Fortran
- [PQLX](https://www.usgs.gov/node/280343):
  An open-source software system for evaluating seismic station performance and data quality
- [Station Analysis Tools](https://robporritt.wordpress.com/software) |
  [IRIS site](https://seiscode.iris.washington.edu/projects/station-analysis-tools):
  A set of c routines for computation of power spectral densities, coherence,
  probability density functions, and a handful of other tools for monitoring
  the health of a station
- [TF-SIGNAL](http://www.nuquake.eu/Computer_Codes/tfsig.htm):
  Computation and visualization of time-frequency representations of time signals
  using one or more of seven alternative methods of time-frequency analysis

### Array seismology

- [ObsPy](https://github.com/obspy/obspy): Data download, processing and visualization software written in Python
- [array_processing](https://github.com/uafgeotools/array_processing):
  Various array processing tools for infrasound and seismic data written in Python
- [Geopsy](http://www.geopsy.org/download.php): An open source software for geophysical
  research and application written in C++
- [ts-PWS](http://diapiro.ictja.csic.es/gt/mschi/SCIENCE/tseries.html#software):
  Time-scale phase weighted stacking written in C

### Seismic Interferometry

- [inter_source_interferometry](https://github.com/trichter/inter_source_interferometry):
  Inter-source interferometry by cross-correlation of coda waves written in Python
- [ThreeStation](https://github.com/NoiseCIEI/ThreeStation):
  Three-station interferometry written in Python

### Seismic Data Digitization and Correction

- [ATacR](https://seiscode.iris.washington.edu/projects/atacr): Automated Tilt
  and Compliance Removal (for ocean bottoms seismometers) written in Matlab
- [Automatic detection of clipped seismic waveform](https://github.com/jinhaizhang2020/Automatic-detection-of-clipped-seismic-waveform):
  The code seems to be related to **CWPAR**.
- [CWPAR](https://seiscode.iris.washington.edu/projects/cwpar-clipped-waveform-pickup-and-restoration):
  Clipped Waveform Pickup and Restoration written in Matlab
- [DigitSeis](http://www.seismology.harvard.edu/research/DigitSeis.html):
  A digitization software for analog seismograms written in Matlab
- [DLOPy](https://github.com/jbrussell/DLOPy_v1.0) |
  [orient](https://github.com/SeisPiano/orient):
  Calculate OBS horizontal orientations based on Raleigh-wave arrival angle
  written in Python (DLOPy) or Matlab (orient)
- [OBStools](https://nfsi-canada.github.io/OBStools/): Removing vertical
  component noise from tilt and compliance effects written in Python
- [OrientPy](https://nfsi-canada.github.io/OrientPy/): Estimate seismometer
  orientation written in Python

### Pattern Recognition and Machine Learning

- [scikit-learn](https://scikit-learn.org/stable/index.html):
  Machine Learning in Python
- [Detex](https://github.com/d-chambers/Detex):
  A Python package for subspace detection and waveform similarity clustering
- [dbscan1d](https://github.com/d-chambers/dbscan1d):
  An efficient 1D implementation of the DBSCAN clustering algorithm in Python
- [Sequencer](https://github.com/dalya/Sequencer):
  An algorithm that detects one-dimensional sequences in complex datasets in Python

### Spherical Harmonics

- [Shansyn](http://www.spice-rtn.org/library/software/shansyn): **S**pherical
  **H**armonic **AN**alysis and **SYN**thesis
- [SHTOOLS](https://github.com/SHTOOLS/SHTOOLS): Spherical Harmonic Tools

---

## Seismological/Geophysical Library

### Seismological Tools/Library

- [CREWES Matlab Toolbox](https://www.crewes.org/ResearchLinks/FreeSoftware):
  Numerical Methods of Exploration Seismology with algorithms in MATLAB
- [Pyrocko](https://pyrocko.org/):
  An open-source seismology toolbox and library written in the Python
- [SEISAN](http://www.seisan.info/): Earthquake analysis software

### Geophysical Tools/Library

- [Fatiando](https://www.fatiando.org/): Open-source tools for geophysics
- [UNAVCO](https://www.unavco.org/) |
  [Software](https://www.unavco.org/software/software.html):
  A community of scientists, educators, and professionals working together
  to better understand Earth processes and hazards using geodesy

----

## Geophysics/Geosciences

### Gravity

- [Harmonica](https://www.fatiando.org/harmonica/latest/):
  Forward modeling, inversion, and processing gravity and magnetic data
  - [moho-inversion-tesseroids](https://github.com/pinga-lab/paper-moho-inversion-tesseroids):
    Fast non-linear gravity inversion in spherical coordinates with application to
    the South American Moho
- [GRAV3D](https://grav3d.readthedocs.io/en/latest/index.html):
  Carrying out 3D forward modelling and inversion of gravity data
- [SphGraGLQ](https://github.com/nqdu/SphGraGLQ): A fast and adaptive gravity
  forward computation method by Gauss-Legendre Quadrature in spherical coordinates in C
- [Gravity modelling and inversion in 2D](https://www.juanafonso.com/software):
  A very simple matlab code to illustrate the basics of gravity modelling and inversion

### InSAR/GPS

- [GMTSAR](https://topex.ucsd.edu/gmtsar/): An InSAR processing system based on GMT
- [SDM - Geodetic finite-fault slip inversion](https://www.gfz-potsdam.de/en/section/physics-of-earthquakes-and-volcanoes/infrastructure/tool-development-lab/):
  Inverting co-seismic surface deformation data (GPS, InSAR, etc.) for fault slip
  distribution written in Fortran

### Geodynamics

- [CitcomS](https://github.com/geodynamics/citcoms): Solve compressible
  thermochemical convection problems relevant to Earth's mantle

### Mineral Physics

- [GassDem](https://github.com/ekim1419/GassDem):
  Modeling anisotropic seismic properties written in MATLAB

### Thermodynamic Modeling

- [Perple_X](http://www.perplex.ethz.ch/) |
  [Thermodynamic Data Files](http://www.perplex.ethz.ch/perplex_thermodynamic_data_file.html) | [Glossary](http://www.perplex.ethz.ch/PerpleX_solution_model_glossary.html) |
  [A tutorial (in Chinese)](https://www.bilibili.com/video/BV1TC4y1Y7Jq?spm_id_from=333.905.b_72656c61746564.3):
  A collection of Fortran77 programs for calculating and displaying phase diagrams,
  phase equilibria, and thermodynamic data
- [HeFESTo](https://sites.epss.ucla.edu/lithgow-bertelloni/hefesto/) |
  [GitHub](https://github.com/stixrude/HeFESToRepository):
  Helmholtz Free Energy Self-consistent Thermodynamics
- [THERMOCALC](https://hpxeosandthermocalc.org/the-thermocalc-software/):
  Calculating model phase equilibria involving the HPx-eos
  and/or individual end-members from the Holland & Powell dataset
- [BurnMan](https://burnman.org/): An open source mineral physics toolbox written
  in Python to generate physical properties for the Earth and other planets

### Geophysics

- [distaz](http://www.seis.sc.edu/software/distaz) |
  [A tutorial (in Chinese)](https://seismo-learn.org/software/utilities/distaz/):
  Calculate distance, azimuth and back-azimuth of any two points at the Earth's surface
- [PlateFlex](https://paudetseis.github.io/PlateFlex/): Estimate lithosphere elastic
  thickness written in Python and Fortran

### Tectonics

- [GPlates](https://www.earthbyte.org/category/gplates): A desktop software for
  the interactive visualisation of plate-tectonics

----

## Geophysical Inversion

### Inversion Theory

- [Parameter Estimation and Inverse Problems: Example Code and Associated Subroutines](https://seiscode.iris.washington.edu/projects/peipcode):
  A compilation of inverse and parameter estimation code that accompanies
  the second edition of the textbook "Parameter Estimation and Inverse Problems"

### Linear Algebra

- [BLAS](http://www.netlib.org/blas/): **B**asic **L**inear **A**lgebra **S**ubprograms
  are routines that provide standard building blocks for performing basic vector and matrix operations
- [LAPACK](http://www.netlib.org/lapack/) | [Working Notes](http://www.netlib.org/lapack/lawns/downloads/index.html) | [GitHub](https://github.com/Reference-LAPACK):
  **L**inear **A**lgebra **PACK**age is a library of Fortran subroutines for
  solving the most commonly occurring problems in numerical linear algebra
- [LINPACK](http://www.netlib.org/linpack/index.html): a collection of Fortran
  subroutines that analyze and solve linear equations and linear least-squares problems,
  which has been largely superceded by **LAPACK**

### Gradient Methods

- [LSQR](https://github.com/jacobwilliams/LSQR): A conjugate-gradient type method
  for solving sparse linear equations and sparse least-squares problems
- [SEISCOPE Optimization Toolbox](https://seiscope2.osug.fr/SEISCOPE-OPTIMIZATION-TOOLBOX?lang=en):
  A set of FORTRAN 90 optimization routines dedicated to the resolution of
  unconstrained and bound constrained nonlinear minimization problems
- [Stanford University Systems Optimization Laboratory: optimization software](https://web.stanford.edu/group/SOL/home_software.html)

### Monte Carlo Methods

- [Malcolm Sambridge: Software](http://rses.anu.edu.au/~malcolm/_pages/Research)
- [Marko Laine: MCMC codes](http://helios.fmi.fi/~lainema/)
- [DRAM](https://www.juanafonso.com/software): A simple teaching code in Fortran
  of the Delayed Rejection Adaptive Metropolis (DRAM) method
- [emcee](https://github.com/dfm/emcee):
  Affine Invariant Markov chain Monte Carlo Ensemble sampler written in Python
- [rj-MCMC](http://www.iearth.edu.au/codes/rj-MCMC): A library providing routines
  for running **R**eversible **J**ump **M**onte-**C**arlo **M**arkov **c**hains
  for 1-D and 2-D spatial regression problems
- [rjmcmc](https://cran.r-project.org/web/packages/rjmcmc/index.html):
  Reversible-Jump MCMC written in R
- [Neighborhood-Algorithm](https://github.com/nqdu/Neighborhood-Algorithm):
  A simple NA implementation in c++

### Numerical Library

- [GNU Scientific Library](https://www.gnu.org/software/gsl/):
  A numerical library for C and C++ programmers
- [Netlib](http://www.netlib.org/):
  A collection of mathematical software, papers, and databases
- [The Comprehensive R Archive Network](https://cran.r-project.org/)
- [The Computational Geometry Algorithms Library](https://www.cgal.org/index.html):
  A software project that provides easy access to efficient and reliable geometric
  algorithms in the form of a C++ library

----

## Software Centers

### Geoscience Software Centers

- [ANU Seismology & Mathematical Geophysics Research Group](http://rses.anu.edu.au/seismology/index.php?p=home) |
  [Software](http://rses.anu.edu.au/seismology/index.php?p=software)
- [Computational Infrastructure for Geodynamics (CIG)](https://geodynamics.org/cig/) |
  [Software](https://geodynamics.org/cig/software)
- [DAS Research Coordination Network](https://github.com/DAS-RCN):
  Codes and Examples from Distributed Acoustic Sensing Research Coordination Network
- [EarthByte](https://www.earthbyte.org/) |
  [Software and Workflows](https://www.earthbyte.org/category/resources/software-workflows):
  An internationally leading eGeoscience collaboration
- [ETH Seismology and Geodynamics](https://seg.ethz.ch/) |
  [Software](https://seg.ethz.ch/software.html)
- [German Research Centre for Geosciences (GFZ)](https://www.gfz-potsdam.de/en/home/) |
  [Wave Physics and Tool](https://www.gfz-potsdam.de/en/section/physics-of-earthquakes-and-volcanoes/infrastructure/tool-development-lab/)
- [iEarth](http://www.iearth.edu.au): A consortium of scientists from the university,
  government and industry sectors with interests in the development and application
  of inversion methodologies for the Earth Sciences
- [IRIS SeisCode](https://seiscode.iris.washington.edu)
- [ISTI Software](https://www.isti.com/software): Instrumental Software Technologies, Inc.
- [Karlsruhe Institute of Technology (KIT) Geophysical Institute](https://www.gpi.kit.edu/english/index.php) |
  [Software](https://www.gpi.kit.edu/english/498.php) |
  [GitLab](https://git.scc.kit.edu/GPIAG-Software):
  Finite-difference numerical methods and full waveform inversion software
  developed by the geophysical institute of the Karlsruhe Institute of Technology
- [MTNet](http://www.mtnet.info/main/index.html) |
  [Codes](http://www.mtnet.info/main/source.html):
  An international electronic forum for the free exchange of knowledge,
  programs and data between scientists engaged in the study of the Earth using electromagnetic methods,
  principally but not exclusively the magnetotelluric technique (magnetotellurics)
- [NuQuake](http://www.nuquake.eu/index.html) |
  [Codes](http://www.nuquake.eu/Computer_Codes):
  Numerical modeling of seismic wave propagation and earthquake motion
- [QUEST](http://www.quest-itn.org/index.html) |
  [Software](http://www.quest-itn.org/library/software):
  **QU**antitative **E**stimation of Earth's Seismic Sources and **ST**ructure
- [Seismo-Live](http://www.seismo-live.org/) |
  [GitHub](https://github.com/krischer/seismo_live):
  Live Jupyter Notebooks for Seismology
- [Seismic wave Propagation and Imaging in Complex media: a European network software](http://www.spice-rtn.org/library/software/softwarefolder_view.html)
- [SW3D](http://seis.karlov.mff.cuni.cz/): **S**eismic **W**aves in complex **3D** structures
- [University of South Carolina Lithospheric Seismology Program](http://www.seis.sc.edu/) |
  [Software](http://www.seis.sc.edu/software.html)
- [University of Ottawa Geophysics Group](https://www.uogeophysics.com/) |
  [Software](https://www.uogeophysics.com/#software)
- [USGS Earthquake Hazards Program](https://www.usgs.gov/natural-hazards/earthquake-hazards) |
  [Software](https://www.usgs.gov/natural-hazards/earthquake-hazards/software)
- [William Menke](https://www.ldeo.columbia.edu/users/menke/) |
  [Software](https://www.ldeo.columbia.edu/users/menke/software.html)

### Software Development Tools

- [Free Intel® Software Development Tools](https://software.intel.com/content/www/us/en/develop/articles/free-intel-software-developer-tools.html)
