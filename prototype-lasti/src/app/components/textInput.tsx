
const format = (str: string) => {
    return str
      .replace(/_/g, ' ')  // Replace underscores with spaces
      .split(' ')           // Split the string into words
      .map(word => 
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() // Capitalize each word
      )
      .join(' ');           // Join the words back into a string
  }

interface props {
    parentFunction: (key: string, value: string) => void,
    valueName: string,
    placeholder?: string,
}

const TextInput = ( {parentFunction, valueName, placeholder} : props) => {
    const handleChange = (value: string) => {
        parentFunction(valueName, value);
    }

    return (
        <div className="w-full">
            <p className="text-black mb-2">{format(valueName)}</p>
            <input 
                type="text" 
                placeholder={placeholder || ""} 
                className="w-full px-4 py-2 rounded-md border border-gray-300 bg-gray-200 text-gray-800 
                        placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 
                        focus:border-orange-500 transition"
                onChange={(e) => handleChange(e.target.value)} 
            />
        </div>
    );
}

export default TextInput;
