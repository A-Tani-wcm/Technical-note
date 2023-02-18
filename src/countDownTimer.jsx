import { useEffect, useState } from "react";
///import "./timer.css";

const Timer = () => {
  const initialTime = 30; //初期値(この場合は30秒)
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft <= 0) return;

    /* The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires. */
    /* setTimeout関数は、関数が実行されてから関数内で指定した時間の分だけ時間が経過した後に、特定の動作をさせたいという場合に使うことができる関数 */
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 0.01);
    }, 10);

    /* The global clearTimeout() method cancels a timeout previously established by calling setTimeout(). */
    /* グローバルの clearTimeout() メソッドは、setTimeout()の呼び出しによって以前に確立されたタイムアウトを解除する。 */
    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div>
        {/* toFixed(): 小数点以下の数を指定した桁数にした文字列を返すメソッド。
        その際に指定した桁数以下の桁がある場合は四捨五入される。
        また、指定した桁数に満たない場合は0で埋められる。 */}
      {timeLeft <= 0 ? <div>TimeUp</div> : <div>{timeLeft.toFixed(2)} sec</div>}
    </div>
  );
};

export default Timer;
