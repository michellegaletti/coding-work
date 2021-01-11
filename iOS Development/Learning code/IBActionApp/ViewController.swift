//
//  ViewController.swift
//  IBActionApp
//
//  Created by Michelle Galetti on 9/11/19.
//  Copyright © 2019 Michelle Galetti. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var labelResult: UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        labelResult.frame.size.width = 120
        // Do any additional setup after loading the view.
    }

    /*
    @IBAction func buttonTapped(_ sender: Any) {
        switch (sender as AnyObject).tag{
        case 1:
            labelResult.text = "Button 1"
        case 2:
            labelResult.text = "Button 2"
        default:
            labelResult.text = "Default"
        }
    }
    */
    @IBAction func buttonRespond(_ sender: UIButton) {
        switch sender.tag{
        case 1:
            labelResult.text = sender.titleLabel?.text
        case 2:
            labelResult.text = sender.titleLabel?.text
        default:
            labelResult.text = "Default"
        }
    }
}

