# Carmel Girls' Secondary School — Website

A static, responsive, multi-page school website. No build step: upload the whole folder to any web host (cPanel, Netlify, GitHub Pages, etc.).

## Pages
| File | Content |
|---|---|
| `index.html` | Home: key facts, welcome, why choose us, Headmistress's message, programmes, growth milestones, news, events |
| `about.html` | Full school history, milestones timeline, current enrolment, vision & mission, community, leadership |
| `academics.html` | The 12 O-Level subjects, subject teachers, NECTA results links (FTNA + CSEE), calendar |
| `admissions.html` | Steps, requirements, fees table, online application (emails the school), FAQs |
| `student-life.html` | Boarding, daily routine, clubs, sports, spiritual life, rules |
| `news.html` | Notice board, school news, upcoming events, downloadable forms |
| `gallery.html` | Filterable photo gallery with lightbox |
| `contact.html` | Headmistress & Academic Teacher contacts, school office, message form, map |

## Already filled in from the school's history document
School history, registration (S.5944) and NECTA centre number (S.6697), owners (Sisters of Apostolic Carmel), location (Olasiti Ward), enrolment (430), teachers (15), the 12 subjects (checked against NECTA), FTNA 2024/2025 results with links to NECTA, and the school email (carmelsch.girls@gmail.com).

## Still to fill in (search the files for `[`)
1. **Phone numbers & P.O. Box**: the `SCHOOL` object at the top of `js/main.js`.
2. **Headmistress & Academic Teacher**: name, phone, email, photo (`contact.html`, Key Contacts).
3. **Headmistress name** in the home page message and About leadership. The quoted message should be approved by her.
4. **Subject teachers**: names and photos (`academics.html`, Our Teachers).
5. **Motto**: "Faith, Knowledge & Service" is a placeholder in `js/main.js`.
6. **Fees & bank details**: `[Amount]`, `[Bank Name]`, `[Number]` in `admissions.html`.
7. **Event dates**: `[DD]` in `index.html` and `news.html`.
8. **Map pin**: the school isn't on Google Maps yet, so the map shows Olasiti Ward. Put the school's GPS coordinates in `contact.html` (instructions in the comment there).
9. **CSEE 2026 / FTNA 2026 links**: once NECTA publishes (early 2027), replace the "NECTA results portal" links in `academics.html` with the school's page. FTNA 2026 will likely be `https://onlinesys.necta.go.tz/results/2026/ftna/results/S6697.htm`.
10. **Photos**: all photo boxes are placeholders by request. Only the logo stays. Replace the temporary crest (`CREST` in `js/main.js` and `images/favicon.svg`) with the official badge.
11. **Downloads**: put PDFs in a `downloads/` folder.

To add a photo, put it in `images/` and place `<img src="images/photo.jpg" alt="Description">` inside the `.photo` div.

## Form emails (admission + contact)
Both forms send to **carmelsch.girls@gmail.com** through FormSubmit (free, no account needed).
- **The first time anyone submits a form, FormSubmit emails an activation link to that inbox. Someone at the school must click "Activate Form" once.** Until then, submissions will not arrive.
- Sending only works once the site is online (or served locally), not when a page is opened as a plain file.
