

var hasLost:boolean = false;
var numHits:int = 0;
var hitCount:GUIText;
var velocityWasStored = false;
var storedVelocity : Vector3;
var bestScore:int = 0;
var lastScore:int = 0;


function OnCollisionEnter(col:Collision) 
{
if (col.gameObject.tag == "tray" )
	{
	Debug.Log("yeah!! hit tray");
		if(!velocityWasStored)
		{
			storedVelocity = rigidbody.velocity;
			velocityWasStored = true;
		}
		if(rigidbody.velocity.y >1 )
		{
		numHits ++;
		}
		rigidbody.velocity.y = storedVelocity.y;
	}
}


function Start () {

}



function Update () 
{

var str:String = "";
	if(!hasLost)
	{
		str = numHits.ToString();
	} 
	else
	{
		str = "Hits: " +numHits.ToString() + "\n Your best:" +bestScore;
		if(bestScore > lastScore) str+= "\nNEW Record!!";
	}
	
	hitCount.text = str;
	if(transform.position.y < -3 )
	{
		if(!hasLost)
		{
		hasLost = true;
		lastBest = bestScore;
			if(numHits > bestScore)
			{
			bestScore = numHits;
			}
		}
	}
}


function OnGUI()
{
	if (hasLost)
	{
	var buttonW:int = 150;
	var buttonH:int =80;
	var halfScreenW:float = Screen.width/2;
	var halfbuttonW:float = buttonW/2;
	
	
		if (GUI.Button(Rect(halfScreenW - halfbuttonW, Screen.height*0.8,buttonW, buttonH), "Play Again"))
		{
		numHits=0;
		hasLost = false;
		transform.position = Vector3(-0.6,2,1.37);
		rigidbody.velocity = Vector3(0,0,0);
		}
	}
}
