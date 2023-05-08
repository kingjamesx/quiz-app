import { useState } from 'react';
const useHandleChange = () => {
  const [selected, setSelected] = useState(null);

  const handleChange = id => {
    if (id && selected && selected === id) {
      return setSelected(selected);
    }

    setSelected(id);
  };

  return { handleChange, selected };
};

export default useHandleChange;
