<template>
    <div class="selection-component">
        <div class="selection-content">
            <span>1</span>
            <div class="arrow"></div>
        </div>
        <div class="selection-list">
            <ul>
                <li>1</li>
                <li>1</li>
                <li>1</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{

        }
    }
}
</script>

<style>
.selection-content{
    border: 1px solid #ccc;
    background-color: white;
    text-align: left;
    padding: 5px;
    width: 25px;
}
.arrow{
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #e3e3e3;
    display: inline-block;
}
.selection-list{
    background-color: white;
}
</style>