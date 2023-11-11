const ToggleSwitch = ({ value, onChange }) => {
  return (
    <div>
      <input type="checkbox" checked={value} onChange={onChange}></input>
    </div>
  );
};

export default ToggleSwitch;
