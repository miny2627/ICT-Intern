<template>
    <ag-grid-vue style="width: 1500px; height: 700px;"
        class="ag-theme-balham"
        :gridOptions="gridOptions"
        :columnDefs="columnDefs"
        :rowData="rowData"
        :defaultColDef="defaultColDef"
        :overlayLoadingTemplate="overlayLoadingTemplate"
        @grid-ready="onGridReady"
        @cell-clicked="cellClicked(0)"
        @cell-double-clicked="cellClicked(1)"
        @cell-value-changed="cellValueChanged()">
    </ag-grid-vue>
</template>
<script>
    import {AgGridVue} from "ag-grid-vue";
    export default {
        name: 'defaultGrid',
        data() {
            return {
                gridOptions: null,
                gridApi: null,
                columnDefs: null,
                rowData: null,
                defaultColDef: null,
                modules: AllModules,
                pasteMode: null,
                pastedArray: null,
                overlayLoadingTemplate: null
            }
        },
        components: {
            AgGridVue
        },
        beforeMount() {
            window.addEventListener('paste',this.paste)
            this.gridOptions = {};
            this.columnDefs = [];
            this.rowData = [];

            for(var i = 1; i < 25; i++){
                this.columnDefs.push({headerName: 'V'+i, field: 'v'+i, cellStyle: {'border-right': '1px solid lightgray'}})
            }
            
            for(i = 0; i < 27; i++){
                this.rowData.push({v1: '', v2: '', v3: '', v4: '',
                                   v5: '', v6: '', v7: '', v8: '',
                                   v9: '', v10: '', v11: '', v12: '',
                                   v13: '', v14: '', v15: '', v16: '',
                                   v17: '', v18: '', v19: '', v20: '',
                                   v21: '', v22: '', v23: '', v24: ''})
            }

            this.defaultColDef = {
                editable: true,
                resizable: true,
                cellRenderer: this.defaultCellRenderer,
                width: 75
            };
            this.overlayLoadingTemplate = '<span class="ag-overlay-loading-center">Loading</span>';
        },
        mounted(){
            this.gridApi = this.gridOptions.api;
            this.columnApi = this.gridOptions.columnApi;
            window.addEventListener('mousedown',this.mouseDown)
        },
        methods:{
            // 클립보드 데이터 설정 - column
            setDefault(){
                this.pastedArray = []
                var tempArray = []
                var newCol = []
                var keys
                var tmpObj
                const clipboardData = event.clipboardData || window.clipboardData;
                const pastedData = clipboardData.getData('Text');

                if(pastedData == "") {
                    alert("클립보드에 데이터가 없습니다")
                }
                    
                if(this.pasteMode == 0){ // column부터 붙여넣기 한다는 전제
                    tempArray = this.dataToArray(pastedData)
                    for(var i = 0; i < tempArray[0].length; i++){
                        if(tempArray[0][i] == ""){
                            tempArray[0][i] = "V"+(i+1)
                        }
                        newCol.push(tempArray[0][i])
                    }

                    if(this.rowData[0] == undefined){
                        keys = []
                        for(i = 0; i < this.columnDefs.length; i++){
                            keys.push('v'+(i+1))
                        }
                    }
                    else{
                        keys = Object.keys(this.rowData[0])
                    }

                    this.gridApi.setRowData([])
                    this.rowData.splice(0, this.rowData.length)

                    if(this.columnDefs.length >= newCol.length){
                        this.columnDefs.splice(newCol.length, this.columnDefs.length - newCol.length)
                    }
                    else{
                        for(i = this.columnDefs.length; i < newCol.length; i++){
                            this.columnDefs.push({headerName: 'V'+(i+1), field: 'v'+(i+1), cellStyle: {'border-right': '1px solid lightgray'}})
                            keys.push('v'+(i+1))
                        }
                    }

                    for(i = 0; i < newCol.length; i++){
                        this.columnDefs[i].headerName = newCol[i]  
                    }

                    this.gridApi.setColumnDefs(this.columnDefs)

                    for(i = 1; i < tempArray.length; i++){
                        tmpObj = new Object()
                        for(var j = 0; j < newCol.length; j++){
                            tmpObj[keys[j]] = tempArray[i][j]
                        }
                        this.pastedArray.push(tmpObj)
                    }
                }
            },

            // Ctrl+V로 그리드 내용 설정
            paste(event){       
                this.gridApi.showLoadingOverlay()   
                switch(this.pasteMode){
                    case 0:
                        this.pasteSelect = true
                        this.setDefault()
                        this.rowData = this.pastedArray
                        
                        this.gridApi.setRowData(this.rowData)
                        this.gridApi.refreshCells()
                        break;
                    case 1:
                        break;
                }
            },

            // 클립보드 내용 Array로 변경
            dataToArray(str) {
                const data = str.split('\n')
                var temp = []
                var arrData = []
                for(var i = 0; i < data.length; i++){
                    temp = data[i].split('\t')
                    if(temp != ''){
                        arrData.push(temp)
                    }
                }
                return arrData;
            },
            cellClicked(count){
                if(count == 0){
                    this.pasteMode = 0
                }
                else{
                    this.pasteMode = 1
                }
            },
            cellValueChanged(){
                this.pasteMode = 0
            },
            onGridReady(){
                this.pasteMode = 0
            }
        }
    }
</script>