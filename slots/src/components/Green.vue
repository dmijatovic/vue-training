<template>
    <div>
        <!-- split injected content into diferent locations-->
        <slot name="title"></slot>
        <hr/>
        <slot name="content"></slot>
    </div>
</template>

<script>

</script>

<style scoped>
    div {
        border: 1px solid green;
        background-color: lightgreen;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    }
</style>