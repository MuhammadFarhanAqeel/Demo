#pragma strict
var smooth = 5.0;
var tiltAngle = 30.0;

function Start () {

}

function Update () {
var tiltAroundZ = Input.GetAxis("Horizontal") * tiltAngle * -2;
var tiltAroundX = Input.GetAxis("Vertical") * tiltAngle * -2 ;
var halfW : float = Screen.width/2;
var halfH:float = Screen.height/3;
var forEu= new Vector3(tiltAroundX,0,tiltAroundZ);

transform.position.y = (Input.mousePosition.y -halfH )/ halfH;
transform.position.x = (Input.mousePosition.x - halfW)/halfW;

//smoothly tilts the transform in to the target position

var target = Quaternion.Euler(forEu);

transform.rotation = Quaternion.Slerp(transform.rotation,target,Time.deltaTime*smooth);

}
