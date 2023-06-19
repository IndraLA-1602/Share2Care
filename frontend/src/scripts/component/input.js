const InputComponent = ({
  label,
  name,
  type,
  placeholder,
}) => /** html */ `<div class="form__group">
<label for="username">${label}</label>
<input
  type="${type || "text"}"
  id="${name}"
  name="${name}"
  placeholder="${placeholder || "Enter Input"}"
  required
/>
</div>`;

export default InputComponent;
