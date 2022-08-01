import React from 'react'

import {
    StyledModal, ModalCard,
    CloseModalButton,
} from "./components"

import Flex from '@/components/Flex'

export default ({
    content,
    width,
    height,
    open,
    setOpen,
}) => {
    return (

        <StyledModal open={open} onClose={() => setOpen(false)}>
            <ModalCard width={width} height={height}>
                <Flex
                    direction='column' width='100%'
                    justify='flex-end' align='flex-end'
                    height='25%'
                >
                    <CloseModalButton onClick={() => setOpen(false)}>×</CloseModalButton>
                </Flex>

                <Flex height='90%' width='100%'>
                    {
                        content()
                    }
                </Flex>
            </ModalCard>

        </StyledModal>

    )
}