import '../styles/spinner.css'

export const Spinner = () => {
    return(
        <div className=" mx-auto w-20">
            <div class="w-full mx-auto lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}