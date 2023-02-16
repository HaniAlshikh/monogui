export const RELEASE = "release"
export const DEVELOPMENT = "development"

export const getOperationMode = () => {
    return import.meta.env.OPERATION_MODE
}

export const init = () => {
    switch (getOperationMode) {
        case DEVELOPMENT:
            console.log(`################ WARNING ###############
            > OPERATION MODE IS SET TO DEVELOPMENT
            > SENSIBLE INFORMATION MIGHT BE LEAKED!
            ########################################`)
            return DEVELOPMENT
        default:
            return RELEASE
    }
}