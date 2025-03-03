const Accesories = ({accessories}) => {
     return (  
          <div>
          <form>
                         <select>
            <option selected value={accessories[0]}>{accessories[0]}</option>
            <option value={accessories[1]}> {accessories[1]} </option>
            <option value={accessories[2]}> {accessories[2]} </option>
            <option value={accessories[3]}>{accessories[3]} </option>
            <option value={accessories[4]}> {accessories[4]} </option>
            <option value={accessories[5]}> {accessories[5]}</option>
            <option value={accessories[6]}> {accessories[6]} </option>
            <option value={accessories[7]}> {accessories[7]} </option>
            <option value={accessories[8]}> {accessories[8]} </option>
            <option value={accessories[9]}>{accessories[9]}</option>
            </select>
          </form>
          </div>
     );
}
 
export default Accesories;