<template>
    <div>
        <div id="ETLMonitoring_Spinner" class="spinner-grow" style="width: 5rem; height: 5rem;" role="status">
            <span style="margin-left:8rem; font-size:4rem">Loading...</span>
        </div>
        <div>
            <iframe @load="onMyFrameLoad" width="1024" height="612" src="https://app.powerbi.com/view?r=eyJrIjoiZDkwYzZjNjgtNjU5ZC00NmIxLTlhMWItYzM4NWU1Yzg0MDM1IiwidCI6ImQzODY0Y2YyLTUyY2QtNGFiZC05MmY1LTk0ZDMzY2VhM2U0ZCJ9" frameborder="0" allowFullScreen="true"></iframe>
        </div>
    </div>
</template>
<script>
    export default {
        title: 'ETL Monitoring',
        methods: {
            onMyFrameLoad() {
                document.getElementById("ETLMonitoring_Spinner").style.display = "none";
            }
        }
    }
</script>