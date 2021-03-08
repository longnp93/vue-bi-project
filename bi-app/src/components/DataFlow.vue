<template>
    <div>
        <div id="DataFlow_Spinner" class="spinner-grow" style="width: 5rem; height: 5rem;" role="status">
            <span style="margin-left:8rem; font-size:4rem">Loading...</span>
        </div>
        <div>
            <iframe @load="onMyFrameLoad" width="1024" height="612" src="https://app.powerbi.com/view?r=eyJrIjoiMGM1ZjFjNWMtNzVjZS00YzQwLTliOTEtZjhjNDc1NDY5NGMwIiwidCI6ImQzODY0Y2YyLTUyY2QtNGFiZC05MmY1LTk0ZDMzY2VhM2U0ZCJ9&pageName=ReportSection" frameborder="0" allowFullScreen="true"></iframe>
        </div>
    </div>
</template>
<script>
    export default {
        title: 'Data Flow',
        methods: {
            onMyFrameLoad() {
                document.getElementById("DataFlow_Spinner").style.display = "none";
            }
        }
    }
</script>