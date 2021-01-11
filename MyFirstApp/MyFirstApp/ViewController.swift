//
//  ViewController.swift
//  MyFirstApp
//
//  Created by Michelle Galetti on 8/28/19.
//  Copyright © 2019 Michelle Galetti. All rights reserved.
//

//One of the most important lines of code (allows Apple Framework functions to work properly)
import UIKit

class ViewController: UIViewController {

    @IBOutlet var labelResult: UILabel!
    @IBOutlet weak var textMessage: UITextField!
    @IBAction func changeButton(_ sender: UIButton) {
        labelResult.text = textMessage.text?.uppercased()
        print (labelResult.text!)
    }
    override func viewDidLoad() {
        super.viewDidLoad()
        //This code takes a ridiculously long amount of time and that is why many developers design their views visually
//        //Define the type of object we want to create
//        let label = UILabel()
//        //Define the object's position, width, and height
//        label.frame = CGRect(x: 125, y: 125, width: 200, height: 80)
//        //Customize object appearance
//        label.text = "This is a label"
//        //Place object on the view
//        view.addSubview(label)
//
//        //Define the type of object we want to create
//        let button = UIButton()
//        //Define the object's position, width, and height
//        button.frame = CGRect(x: 125, y:300, width: 80, height: 80)
//        //Customize button appearance by name and by color
//        button.setTitle("Button", for: .normal)
//        button.setTitleColor(UIColor.blue, for: .normal)
//        //Place object on the view
//        view.addSubview(button)
    }


}

