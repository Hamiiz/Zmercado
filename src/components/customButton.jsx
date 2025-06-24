export default function CustomButton({ text, className }) {

    
    
    return (
        <button
        className="hover:bg-foreground"
        style={className} >
        {text}
        </button>
    )
    }