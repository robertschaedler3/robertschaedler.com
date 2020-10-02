param(
    [string]$fireBaseToken,
    [string]$fireBaseProject
)

$dir = Split-Path $MyInvocation.MyCommand.Path
Push-Location $dir

write-host "starting deployment...";
firebase --version;
firebase deploy --token $fireBaseToken --project $fireBaseProject;
write-host "deployment complete.";

Pop-Location