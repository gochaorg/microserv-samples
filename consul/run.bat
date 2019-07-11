@echo off

:: resolve consul dir
pushd
cd %~dp0
set THIS_DIR=%CD%
popd
::echo %THIS_DIR%

:: resolve data dir
set DATA_DIR=%THIS_DIR%\data
set CONF_DIR=%THIS_DIR%\config

set CONSUL=%THIS_DIR%\consul.exe
::"%CONSUL%" -config-dir "%CONF_DIR%" -data-dir "%DATA_DIR%"
"%CONSUL%" agent -dev -config-dir "%CONF_DIR%" -data-dir "%DATA_DIR%"