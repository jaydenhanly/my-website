# User Flows

## Primary Flow: Visitor Discovers Portfolio & Reaches Out

### Happy Path
1. **Landing** — User lands on homepage
   - Sees hero section with headline and CTA ("Hire Me")
   - Impressed by design/presentation

2. **Exploration** — User scrolls/explores
   - Views portfolio projects
   - Reads about design expertise
   - Considers value proposition

3. **Interest** — User is interested
   - Clicks "Hire Me" or navigates to Contact section
   - Sees contact form

4. **Inquiry** — User submits inquiry
   - Fills out name, email, message
   - Form validates input
   - Submission succeeds
   - User sees success confirmation

5. **Follow-up** — Email notification sent
   - Designer receives notification
   - Follows up with user

### Alternative Paths

#### Skip to Contact (Impatient)
- User clicks "Hire Me" or Contact nav link
- Jumps to contact form
- Submits inquiry

#### Navigate via Nav
- User clicks nav links to jump between sections
- Smooth scroll to desired section
- Explores selectively

#### Mobile Discovery
- Same flow, optimized for mobile
- Touch-friendly buttons
- Readable on small screens

#### Exit without Contact (Not Interested)
- User leaves via browser back/close
- No further action
- (Optional: exit intent popup in future)

---

## Secondary Flow: Client Viewing Case Study

### Future Feature (Phase 2)
1. User clicks on portfolio project
2. Navigates to case study page
3. Reads detailed project information
4. Views images, challenges, solutions
5. Sees client testimonial
6. Clicks CTA to get in touch
7. Returns to contact flow

---

## Edge Cases & Error Handling

### Form Validation Errors
- User submits with missing fields
  → Form shows error messages
  → User corrects and resubmits

- User enters invalid email
  → Form shows "Invalid email" message
  → User corrects email

### Network Error
- Form submission fails
  → Show error message
  → Allow retry

### Success State
- Form submits successfully
  → Show success message
  → Optional: clear form or disable submit button
  → Optional: redirect or close form

---

## Performance Considerations

- Hero section must load fast (< 1.5s FCP)
- Confetti animation triggers client-side (no impact on load)
- Images lazy-load below the fold
- Navigation is instant (no API calls)

---

## Accessibility

### Keyboard Navigation
- Tab through nav links
- Tab to form inputs
- Enter to submit form
- Escape to close modals (if any)

### Screen Readers
- Nav has proper ARIA labels
- Form labels associated with inputs
- Heading hierarchy preserved
- Link text is descriptive

### Focus Management
- Visible focus rings on all interactive elements
- Focus moves logically through page
