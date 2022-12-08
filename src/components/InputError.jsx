//  pvz <InputError error={formik.errors.image} />
function InputError(props) {
  // jei neturim klaidos tai nieko nerodom
  if (!props.error || !props.touch) return null;

  return <p className='inputErroMsg'>{props.error}</p>;
}
export default InputError;
