<script lang='ts'>
    import Icon from '@iconify/svelte';
    import { getContext } from 'svelte';
    import ModalContent from './ModalContent.svelte';
    
    const { open } = getContext('simple-modal');

    function showModal() {
        open(ModalContent);
    }
</script>

<footer>
    <div class="leading">Copyright &copy;&nbsp;<a href="https://github.com/newageoflight/">Christopher Chen</a>&nbsp;2021-</div>
    <div class="button-container">
        <button on:click={showModal}>
            <Icon icon="ant-design:question-circle-outlined" />
        </button>
    </div>
</footer>

<style lang='scss'>
    footer {
        grid-area: footer;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 5px 1em;
        background-color: #87cefa;
        color: white;
        font-size: 0.8rem;
        position: sticky;
        bottom: 0;

        a {
        color: white;
        }
        
        > .leading {
        flex: 1
        }
    }

    button {
        background-color: transparent;
        border-radius: 5px;
        border-color: transparent;
        outline: none;
        color: white;
        padding: 1px;

        &:hover {
            background-color: rgba(255,255,255,0.3);
        }

        &:active {
            background-color: rgba(255,255,255,0.5);
        }
    }
</style>