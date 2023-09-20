# TASKLOGGER v.1
# Simple Python GUI to append time-stamped tasks & categories to TSV text file.
# 'tasklogger_config.json' used for default tasks & categories - but works without it.
# 'tasklogger_log.tsv' records tasks in launch directory
# 
# By Rich Tatum (rich.tatum@gmail.com | https://x.com/RichTatum)
# 
# PERMISSIONS:
# This software is provided "as-is," without any express or implied warranty,
# and is unsupported. You may freely use and modify this code for personal, 
# non-commercial purposes.
# Attribution is appreciated but not required.
# 
# -----------------------------------------------------------
# 
# INSPIRED BY:
#     - LifeLogger.ahk by FND (Feb 2007) https://bit.ly/453a5kh
#     - xlsQuickLogger.vbs by Gina Trapani (AUG  2006) https://bit.ly/460kD4Q
#     - QuickLoggerPlus.vbs by Kirk Friggstad (JUL 2006) https://bit.ly/3RuAeFn
#     - QuickLogger.vbs by Gina Trapani (JUL 2006) https://bit.ly/3sU16V6
#     - QuickLogger.vbs v.0.1 by Joshua Fitzgerald (JUL 2005)
# -----------------------------------------------------------
# 
# TODO (someday...maybe):
#     - Exception handling for TSV in case of disk full, permission denied, etc.
#     - Provide a config for a default pre-populated task & category
#     - Add tooltips?
#     - Validation/empty field test
#     - Task/category auto-completion?
# -----------------------------------------------------------


# -*- coding: utf-8 -*-

# Import required libraries
import webbrowser
from tkinter import Text
import tkinter as tk
from tkinter import ttk
from datetime import datetime
import csv

# Function to center the window on the screen
def center_window(root):
    root.update_idletasks()
    width = root.winfo_width()
    height = root.winfo_height()
    x = (root.winfo_screenwidth() // 2) - (width // 2)
    y = (root.winfo_screenheight() // 2) - (height // 2)
    root.geometry('{}x{}+{}+{}'.format(width, height, x, y))

# Initialize a flag to check if the application is closing
is_closing = False

# Function to log the task and close the window, bound to Enter key
def log_task_and_exit(event=None):
    global is_closing
    if not is_closing:
        is_closing = True
        log_task()
        root.destroy()

# Function to close the window, bound to ESC key
def close_window(event=None):
    root.destroy()
    
# Function to log the task to a TSV file
    # Debugging line
    # with open('tasklogger_debug.txt', 'a') as f:
    #     f.write("Logging task\n")
        
def log_task():
    task_name = task_name_var.get()
    task_category = task_category_var.get()
    timestamp = datetime.now().strftime("%Y-%m-%d %I:%M:%S %p")  # 12-hour format
    
    # Create or append to the TSV file
    with open('tasklogger_log.tsv', 'a', newline='') as file:
        writer = csv.writer(file, delimiter='\t')
        writer.writerow([timestamp, task_name, task_category])

# Function to handle task name selection, update category accordingly
def on_task_name_select(event):
    selected_task_name = task_name_var.get()
    default_category = default_categories.get(selected_task_name, "")
    task_category_var.set(default_category)

# Function to update task name suggestions based on user input
def update_task_name_suggestions(event):
    current_input = task_name_var.get().lower()
    filtered_task_names = [name for name in all_task_names if current_input in name.lower()]
    task_name_dropdown['values'] = filtered_task_names

# Default task names and their associated categories

import json

try:
    with open('tasklogger_config.json', 'r') as f:
        config = json.load(f)
    default_task_names = config['default_task_names']
    default_categories = config['default_categories']
    unassociated_categories = config['unassociated_categories']

# IMPORTANT: You may want to modify these defaults if you intend to distribute
# this file to others. The default values below will populate the drop-down even
# when the JSON config file is missing. These are the fallback defaults!
except FileNotFoundError:
    print("Configuration file not found. Using default settings.")
    default_task_names = ["START","BREAK","Paid Time Off","END"]
    default_categories={"START":"START","BREAK":"BREAK","Paid Time Off":"PTO","END":"END"}
    unassociated_categories = ["Meeting","Email"]
except json.JSONDecodeError:
    print("Error decoding the JSON configuration file. Using default settings.")
    default_task_names = ["START","BREAK","Paid Time Off","END"]
    default_categories={"START":"START","BREAK":"BREAK","Paid Time Off":"PTO","END":"END"}
    unassociated_categories = ["Meeting","Email"]
except Exception as e:
    print(f"An unexpected error occurred: {e}. Using default settings.")
    default_task_names = ["START","BREAK","Paid Time Off","END"]
    default_categories={"START":"START","BREAK":"BREAK","Paid Time Off":"PTO","END":"END"}
    unassociated_categories = ["Meeting","Email"]

# Add any other task names below
# 'all_task_names' is intended to hold all possible task names, which may include
# the default set from 'default_task_names' as well as any additional task names that could be 
# added programmatically or dynamically in the future.
all_task_names = default_task_names

# Create the main window
root = tk.Tk()
root.title("\uD83D\uDD50 Task Logger | v.1")
root.geometry("810x125")

# Initialize variables
datetime_var = tk.StringVar()
task_name_var = tk.StringVar()
task_category_var = tk.StringVar()

# Initialize the date/time to current time
current_datetime = datetime.now().strftime("%Y-%m-%d %I:%M:%S %p")
datetime_var.set(current_datetime)

# Create Date/Time textbox
datetime_label = ttk.Label(root, text="Timestamp")
datetime_label.grid(row=0, column=0, padx=(10, 5), pady=(10, 1), sticky='W')
datetime_entry = ttk.Entry(root, textvariable=datetime_var, width=25)
datetime_entry.grid(row=1, column=0, padx=(10, 5))

# Create dropdown for task names
task_name_label = ttk.Label(root, text="What were you working on just now?")
task_name_label.grid(row=0, column=1, pady=(10, 1), sticky='W')
task_name_dropdown = ttk.Combobox(root, textvariable=task_name_var, values=all_task_names, width=50)
task_name_dropdown.grid(row=1, column=1, padx=5)
task_name_dropdown.bind("<<ComboboxSelected>>", on_task_name_select)
task_name_dropdown.bind("<KeyRelease>", update_task_name_suggestions)  # Bind function to KeyRelease event
task_name_dropdown.focus_set()  # Automatically focus on this widget

# Create dropdown for categories
task_category_label = ttk.Label(root, text="Project/Category/Keyword")
task_category_label.grid(row=0, column=2, pady=(10, 1), sticky='W')
task_category_dropdown = ttk.Combobox(root, textvariable=task_category_var, values=unassociated_categories, width=30)
task_category_dropdown.grid(row=1, column=2, padx=5)

# Create button to log the task
log_button = ttk.Button(root, text="LOG IT", command=log_task_and_exit)
log_button.grid(row=1, column=3, padx=5)

# Create an instructions label with line wrapping
instructions_label = ttk.Label(
    root,
    text="\uD83D\uDEC8 Describe the task you just completed above, and assign a category. If you prefer logging tasks as you BEGIN them\u2009\u2014\u2009just be consistent. (Don\u2019t mix starting/ending timestamps! TIP: Begin each day with \u201Cstart,\u201D close out with \u201Cend,\u201D indicate breaks with \u201C\u200Bbreak,\u201D and etc.)",
    wraplength=495  # wrap length in pixels
    )
instructions_label.grid(row=2, column=0, columnspan=4, padx=(10, 0), pady=(10, 0), sticky='W')

# Create a credit label
credit_label = ttk.Label(root, text="Tasklogger | by @RichTatum", foreground="#646464")
credit_label.grid(row=2, column=0, columnspan=4, padx=5, pady=(10, 0), sticky='N, E')
# credit_label.config(background='yellow')

# Center the window on the screen
center_window(root)

# Bind ESC key to close window without logging task
root.bind('<Escape>', close_window)

# Bind ENTER key to log task and close window
root.bind('<Return>', log_task_and_exit)

# Run the Tkinter event loop
root.mainloop()