<template>
<div class="container">
    <div class="cont">
        <div class="chess-box">
        <ul >
            <cell></cell>
            <cell></cell>
            <cell></cell>
            <cell></cell>
            <cell></cell>
            <cell></cell>
            <cell></cell>
            <cell></cell>
            <cell></cell>
        </ul>
        </div>
    </div>
</div>
</template>
<script>
    import cell from '../../components/cellStep/cell-01';
    export default {
        name: 'game01',
        components: {cell},
    }
</script>
<style >

</style>
