import negative from '../../imgs/negative.png'
import positive from '../../imgs/positive.png'
import warning from '../../imgs/warning.png'
function TransactionsCard({name,date,amount})
{
    function amountCheck(amount)
    {
        if(amount==="Pending"){
            return <img src={warning}></img>
        }
        else if(amount<0){
            return <img src={negative}></img>
        }
        else{
            return <img src={positive}></img>
        }
    }
    function amountFormatter(amount){
       let strAmount=String(amount)
       console.log(amount)
       let formatted=""
       for (let index = 0; index < strAmount.length; index++) {
        formatted+=strAmount[index]
       if(strAmount[index]==="-" || strAmount[index]==="+"){
        formatted+="$"
       }
    }
    return formatted
}
    amountFormatter(amount)
    return (
        <div className="flex justify-between py-2">
            <div className="flex gap-2">
                <div className="mt-1">{amountCheck(amount)}</div>
                <div>
                    <p className="text-slate-50 font-signin-p">{name}</p>
                    <p className="font-singin-p text-sm text-slate-500">{date}</p>
                </div>
            </div>
            <div>
                <p className={`font-signin-p ${amount>0?"text-green-600":"text-slate-500"}`}>{amountFormatter(amount)}</p>
            </div>
        </div>
    )
}

export default TransactionsCard