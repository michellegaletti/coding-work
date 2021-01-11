//
//  ViewController.swift
//  beatles
//
//  Created by Michelle Galetti on 9/12/19.
//  Copyright © 2019 Michelle Galetti. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var beatlesImage: UIImageView!
    @IBOutlet weak var titleLabel: UILabel!
    @IBOutlet weak var imageControl: UISegmentedControl!
    
    @IBAction func changeInfo(_ sender: UISegmentedControl) {
        if imageControl.selectedSegmentIndex == 0{
            titleLabel.text = "Young Beatles"
            beatlesImage.image = UIImage(named: "beatles1")
        } else if imageControl.selectedSegmentIndex == 1{
            titleLabel.text = "Not so young Beatles"
            beatlesImage.image = UIImage(named: "beatles2")
        }
    }
    
    @IBAction func updateFont(_ sender: UISwitch) {
        if sender.isOn {
            titleLabel.text = titleLabel.text?.uppercased()
        } else{
            titleLabel.text = titleLabel.text?.lowercased()
        }
    }
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }
}

