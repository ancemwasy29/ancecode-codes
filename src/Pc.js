const Pc = ({ pc }) => {
  return (
      <div >
        <form>
          <select>
            <option selected value={pc[6]}> {pc[6]} </option>
            <option value={pc[0]}> {pc[0]} </option>
            <option value={pc[1]}> {pc[1]} </option>
            <option value={pc[2]}> {pc[2]} </option>
            <option value={pc[3]}> {pc[3]} </option>
            <option value={pc[4]}> {pc[4]} </option>
            <option value={pc[5]}> {pc[5]} </option>
          </select>
        </form>
      </div>
  );
};

export default Pc;
