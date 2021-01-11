//
//  ViewController.swift
//  LabelApp
//
//  Created by Michelle Galetti on 9/24/19.
//  Copyright © 2019 Michelle Galetti. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var myLabel: UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }


    @IBAction func changeLabel(_ sender: UIButton) {
        myLabel.text = "Text created"
        myLabel.numberOfLines = 2
        myLabel.font = UIFont(name: "Courier", size: 14)
        myLabel.backgroundColor = UIColor.yellow
        myLabel.isEnabled = false
    }
    
}

