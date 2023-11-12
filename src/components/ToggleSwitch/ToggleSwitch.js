import "../ToggleSwitch/ToggleSwitch.css";

const ToggleSwitch = () => {
  return (
    <div className="switch">
      <input
        className="toggle__switch_checkbox"
        id={`toggle-switch`}
        type="checkbox"
      />
      <label className="toggle__switch_label" htmlFor={`toggle-switch`}>
        <span className="toggle__switch_button">
          <span className="toggle__switch_f">F</span>
        </span>
        <div className="toggle__switch_states">
          <span className="toggle__switch_c">C</span>
        </div>
      </label>
    </div>
  );
};

export default ToggleSwitch;
